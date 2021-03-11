import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import actions from '../actions';
import store from '../store';
type CategoriesProperties = {
    categories: any;
}
const Categories: React.FC<CategoriesProperties> = ({categories}) => {
    useEffect(() => {
        store.dispatch({type: actions.CATEGORIES});
    }, [])

	return (
        <div className="div">
            <div className="row">
                <div className="col-12">
                    <h2 className="">All Categories</h2>
                        {typeof(categories) !== 'undefined' && categories.map((category: any, index: any) => {
                            return <div className="card w-25" key={category.id}>
                                <div className="card-body">
                                  <h5 className="card-title">{category.name}</h5>
                                </div>
                              </div>
                        })}
                </div>

            </div>
        </div>
	)
}

interface Props {
    
    post: {categories: any[]};
  }
  
  const defaultState = (state: Props) => {
    return {
      categories: state.post.categories,
    };
  };

export default connect(defaultState)(Categories);