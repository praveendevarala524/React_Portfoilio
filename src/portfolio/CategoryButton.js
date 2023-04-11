const CategoryButton =({category,onChangeCategory,className}) =>{

    return (
        <>
        <button className={className} onClick={()=>onChangeCategory(category)}>{category}</button>
        </>
    )
}

export default CategoryButton;