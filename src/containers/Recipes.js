import { connect } from 'react-redux'
import Recipes from '../components/Recipes'

const mapStateToProps = state => {
    return {
        recipes: state.recipes
    }
}

export default connect(
    mapStateToProps,
    null
)(Recipes);
