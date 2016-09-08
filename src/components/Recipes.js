// @flow

import React from 'react';

import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

/*
 * Learning: Wrappers should always pass down props to inner elements
 * The problem was that RecipeShowIcon was not passing down styles that ListItem should give to IconButton
 * Passing down props to wrapper's children also allows to pass down handlers
 */
const RecipeShowIcon = props => <IconButton {...props} children={<FontIcon className="material-icons">visibility</FontIcon>} />

const RecipeItem = props => {
    const style = { backgroundColor: !props.isRead ? 'rgba(0,0,0,0.2)' : null };
    return (
        <ListItem
            primaryText={props.name}
            style={style}
            leftCheckbox={<Checkbox />}
            rightIconButton={<RecipeShowIcon />}
            />
    );
}

const Recipes = ({ recipes }) =>
    <List>
        {recipes && recipes.map(recipe => <RecipeItem name={recipe.name} isRead={recipe.isRead} />)}
    </List>

export default Recipes;