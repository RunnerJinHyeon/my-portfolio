import profileimg from "../images/profile.png"
import studyimg from "../images/study2.png"
import pdfimg from "../images/Pdf.png"
import githubimg from "../images/Github.png"
import { useEffect, useState } from "react"


const Intro = () => {
    const [isLoading,setIsLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{setIsLoading(false)},1000)
    },[])

    const handleOpenGithub = () => {
        window.open("https://github.com/RunnerJinHyeon")
    }

    const handleOpenBlog = () => {
        window.open("https://jinee0903.tistory.com/")
    }
    
    
    return (
        <>
            <div className="w-full h-screen  flex flex-col justify-center items-center" style={{
                backgroundImage: `url(${studyimg})`,
                backgroundSize: "cover",
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
                
                {isLoading ? (<div className="flex items-center justify-center  w-[50vh] h-[30vh] bg-white"><div className=" text-center">loading</div></div>) : (<div className=" w-[75vh] h-[45vh] bg-opacity-10  flex flex-col justify-center items-center">
                    <div className="flex flex-row w-[75vh] h-[30vh]">
                    <div className="w-[20vh] h-[20vh] flex justify-center ">
                        <img className="w-[16vh] h-[20vh] rounded-md shadow-md" src={profileimg} alt="프로필이미지"/>
                    </div>
                    <div className="w-[50vh]" >
                        <h1 className="text-center w-[50vh] text-3xl">안녕하세요</h1>

                        <h1 className="text-center w-[50vh] text-3xl my-4">프론트엔드 개발자</h1>
                        <h1 className="text-4xl mb-2 w-[50vh] h-[100px] text-center  font-bold text-gray-700">김진현입니다</h1>

                    </div>
                    </div>
                    
                    <div>
                        <div className="flex flex-row w-[350px] h-[100px] justify-between items-center font-bold text-gray-700">
                            <a href='/assets/portfolio.pdf' target="_blank" className="w-[100px] h-[50px] inline-flex flex-row justify-center items-center rounded-md shadow-xl bg-[#ffffff]">
                                <img className="w-[18px] h-[23px] mr-1" src={pdfimg} alt="pdf이미지"></img>
                                이력서
                            </a>
                            <button className="w-[100px] h-[50px] inline-flex flex-row justify-center items-center rounded-md shadow-xl bg-[#ffffff]" onClick={handleOpenGithub}>
                                <img className="w-[18px] h-[23px] mr-1" src={githubimg} alt="깃허브이미지"/>
                                Github
                            </button>
                            <button className="w-[100px] h-[50px] inline-flex flex-row justify-center items-center rounded-md shadow-xl bg-[#ffffff]" onClick={handleOpenBlog}>Blog</button>
                        </div>
                    </div>
                    
                </div>)}
            </div>
        </>
    )
}

export default Intro