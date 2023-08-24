import image from '../../assests/images/illustration-features-tab-1.svg'
import image2 from '../../assests/images/illustration-features-tab-2.svg'
import image3 from '../../assests/images/illustration-features-tab-3.svg'
import './Main.css'


export const SimpleBookmark =()=>{
    return(
        <div className=' flex tablet:flex-row mobile:flex-col items-center justify-between py-16 '>
            <div className=' tablet:w-1/2 mobile:w-full simple-main-banner'>
                <img src={image} alt=" banner image" />
            </div>
            <div className=' tablet:w-1/2 mobile:w-full tablet:pl-20 mobile:mt-20 tablet:mt-0 simple-main-banner2 tablet:text-left mobile:text-center'>
                <h1 className=' text-3xl font-bold '>
                    Bookmark in one click
                </h1>
                <p className=' font-semibold text-md text-slate-500 leading-7 py-4'>
                    Organize your browser bookmarks however you like.
                    Our simple drag-and-drop interface gives you complete
                    control over how you manage your favourite sites
                </p>
                <button className=' bg-Soft-Blue text-white font-semibold p-3 rounded-lg mt-5
                transition-all duration-300 border-2 border-Soft-Blue
                hover:bg-white
                 hover:text-Soft-Blue
                  hover:border-Soft-Blue'>
                    More info
                </button>
            </div>
        
        </div>
    )
}

export const Speedysharing=()=>{

    return(
        <div className=' flex tablet:flex-row mobile:flex-col items-center justify-between py-16 pb-24'>
            <div className=' tablet:w-1/2 mobile:w-full speedy-main-banner'>
                <img src={image2} alt=" banner image-2" />
            </div>
            <div className=' tablet:w-1/2 mobile:w-full tablet:pl-20 mobile:mt-20 tablet:mt-0 speedy-main-banner2 tablet:text-left mobile:text-center'>
                <h1 className=' text-3xl font-bold '>
                    Intelligent Search
                </h1>
                <p className=' font-semibold text-md text-slate-500 leading-7 py-4'>
                    Our powerful search feature will help you find saved sites
                    in no time at all. No need to trawl through all of your
                    bookmarks.
                </p>
                <button className=' bg-Soft-Blue text-white font-semibold p-3 rounded-lg mt-5
                 transition-all duration-300 border-2 border-Soft-Blue
                 hover:bg-white
                  hover:text-Soft-Blue
                   hover:border-Soft-Blue'>
                    More info
                </button>
            </div>
        
        </div>
    )
}

export const Easysharing=()=>{
    return(
        <div className=' flex items-center tablet:flex-row mobile:flex-col justify-between py-16 pb-24'>
            <div className=' tablet:w-1/2 mobile:w-full easy-main-banner'>
                <img src={image3} alt=" banner image" />
            </div>
            <div className=' tablet:w-1/2 mobile:w-full tablet:pl-20 mobile:mt-20 tablet:mt-0  easy-main-banner2 tablet:text-left mobile:text-center'>
                <h1 className=' text-3xl font-bold'>
                    Share your bookmarks
                </h1>
                <p className=' font-semibold text-md text-slate-500 leading-7 py-4'>
                    Easily share your bookmarks and collections width
                    others. Create a shareable link that you can send
                    at the click of a button.
                </p>
                <button className=' bg-Soft-Blue text-white font-semibold p-3 rounded-lg mt-5
                 transition-all duration-300 ease-in-out border-2 border-Soft-Blue
                 hover:bg-white
                  hover:text-Soft-Blue
                   hover:border-Soft-Blue'>
                    More info
                </button>
            </div>
        
        </div>
    )
}
