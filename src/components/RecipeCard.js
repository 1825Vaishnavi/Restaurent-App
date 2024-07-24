import CustomImage from "./CustomImage"

export default function RecipeCard({recipe}){
    return(
        <div className="recipie-card">
            <CustomImage imgSrc={recipe.image} pt="65%"></CustomImage>
            <div className="recipie-card-info">
                <img  className="author-img" src={recipe.authorimg} alt=""/>
                <p className="recepie-title">{recipe.title}</p>
                <p className="recipe-desc">Lorem Ipsum is simply dummy text of the printing .</p>
                <a className="view-btn" href="#!">VIEW RECIPE</a>
            </div>
            

        </div>
        
    )
}