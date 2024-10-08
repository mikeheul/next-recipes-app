import { ArrowRightIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { RecipeType } from '@/types/types';
import Image from 'next/image';

const MiniRecipeCard = ({ recipe }: { recipe: RecipeType }) => {

    const router = useRouter()

    const viewRecipe = () => {
        router.push(`/recipe/${recipe.id}`);
    };

    return (
        <div className="w-full sm:w-[200px] bg-white dark:bg-slate-800 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Recipe Content */}
            <div className=''>
                {/* Recipe picture */}
                <div className='overflow-hidden h-[250px] sm:h-[150px]'>
                    <Image 
                        src={recipe.image}
                        width={500}
                        height={200}
                        className='w-full h-full object-cover hover:scale-110 transition duration-300'
                        alt={recipe.title}
                    />
                </div>

                <div className='p-5'>
                    {/* Recipe Title */}
                    <h2 className="text-lg mb-2">{recipe.title}</h2>

                    {/* View Recipe Button */}
                    <button 
                        onClick={viewRecipe}
                        className="text-slate-800 dark:text-white font-semibold hover:text-slate-600 py-2 rounded-mdtransition-colors duration-300 flex items-center space-x-2">
                        <span>View Recipe</span> <ArrowRightIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MiniRecipeCard;
