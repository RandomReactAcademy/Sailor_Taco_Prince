// @flow

import React from 'react';
import AppBar from 'material-ui/AppBar';

import ReadButtons from './ReadButtons';

type Props = {
    recipesById: Object,
    ingredientsById: Object,
    shownRecipe: {
        id: String
    },
    readRecipe: (id: string) => void,
    unreadRecipe: (id: string) => void
};

const RecipeHeader = ({ recipesById, shownRecipe, ingredientsById, readRecipe, unreadRecipe }: Props) => {
    const recipe = recipesById[shownRecipe.id];
    const shouldShowTitle = recipesById && shownRecipe.id && recipe;
    const title = shouldShowTitle ? recipe.name : '';
    const readButtons = recipe ? <ReadButtons onRead={() => readRecipe(recipe.id) } onUnread={() => unreadRecipe(recipe.id) } /> : <div></div>;

    return (
        <AppBar
            title={title}
            iconStyleLeft={{ display: 'none' }}
            iconElementRight={readButtons}
            />
    );
}

export default RecipeHeader;