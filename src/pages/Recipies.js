import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"
export default function Recipies(){
    const recipies=[
        {
            title:"Chickan Pan Pizza",
            image:"/img/gallery/img_1.jpg",
            authorimg:"/img/top-chefs/img_1.jpg",
        },
        {
            title:"Spagetti and  Meatballs",
            image:"/img/gallery/img_4.jpg",
            authorimg:"/img/top-chefs/img_2.jpg",
        },
        {
            title:"American Cheese Burger",
            image:"/img/gallery/img_5.jpg",
            authorimg:"/img/top-chefs/img_3.jpg",
        },
        {
            title:"Mutton Biryani",
            image:"/img/gallery/img_6.jpg",
            authorimg:"/img/top-chefs/img_4.jpg",
        },
        {
            title:"Japanese Sushi",
            image:"/img/gallery/img_10.jpg",
            authorimg:"/img/top-chefs/img_5.jpg",
        },
        {
            title:"Steak",
            image:"/img/gallery/img_9.jpg",
            authorimg:"/img/top-chefs/img_6.jpg",
        }

    ].sort(()=> Math.random() -0.5)
   
    return(
        <div>
          <PreviousSearches/>
          <div className="recipies-container">
            {/* <RecipeCard/> */}
            {recipies.map((recipe,index)=>(
                <RecipeCard key={index} recipe={recipe} />
            ))}
            
          </div>
           </div>
       
    )
}