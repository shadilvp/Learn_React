import PropTypes from 'prop-types';

function List(props){
    let category = props.category ;
    let itemslist = props.items;
    

        // fruits.sort((a,b)=>a.name.localeCompare(b.name))//alphabetic order
        // fruits.sort((a,b)=>b.calories - a.calories)
        // const filtering = fruits.filter(x => x.calories <= 100)

    let listitems = itemslist.map(items => <li key={items.id}>
                                                {items.name}: &nbsp;
                                                <b>{items.calories}</b></li>)
    
    return( <>
            <h3>{category}</h3>
            <ol>{listitems}</ol>
            </>
        );
}

List.defaultProps = {
    category: "default",
    items: []
};


export default List