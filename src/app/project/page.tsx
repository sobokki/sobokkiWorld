'use client'
import { useState } from "react";
import Image from "next/image"
import styles from "./project.module.scss"
import KeepyUppyModal from "../components/modal/projectModal/keepyUppyModal";
import keepyUppyDarkImg from "../../../public/keepyUppydark.svg";
import taskifyDarkImg from"../../../public/taskifyDark.svg";

import keepyUppyColorImg from "../../../public/keepyUppyColor.svg";
import taskifyColorImg from "../../../public/taskifyColor.svg";
import rollingColorImg from "../../../public/RollingColor.svg";
import TaskifyModal from "../components/modal/projectModal/taskifyModal";
import RollingMdoal from "../components/modal/projectModal/rollingModal";
export default function Project(){
  const [hovered, setHoverd]=useState({
    keepyUppy:false,
    taskify:false,
    rolling:false,
  })
  const[isKeepyUppyOpen,setIsKeepyUppyOpen]=useState<boolean>(false);
  const[isTaskifyOpen,setIsTaskifyOpen]=useState<boolean>(false);
  const[isRollingOpen,setIsRollingOpen]=useState<boolean>(false);

  return(
  <div className={styles.container}>
    <div
    className={styles.imageWrapper}
    onMouseEnter={()=> setHoverd((prev)=>({...prev, keepyUppy:true}))}
    onMouseLeave={()=>setHoverd((prev)=>({...prev, keepyUppy:false}))}
    >
      
    <Image 
    className={styles.keepyUppyDarkImg} src={hovered.keepyUppy?keepyUppyColorImg:keepyUppyDarkImg}  alt="키피어피 이미지" width={493} height={200}/>
      {hovered.keepyUppy &&<button onClick={()=>setIsKeepyUppyOpen(true)} className={styles.button}>협업 일정 관리 사이트 </button>}

    </div>
     {isKeepyUppyOpen&&<KeepyUppyModal closeClick={()=>setIsKeepyUppyOpen(false)}/>}
    <div
    className={styles.imageWrapper}
    onMouseEnter={()=> setHoverd((prev)=>({...prev,taskify:true}))}
    onMouseLeave={()=>setHoverd((prev)=>({...prev, taskify:false}))}
    >
    <Image className={styles.image} src={hovered.taskify? taskifyColorImg:taskifyDarkImg} alt="테스키파이 이미지"  width={493} height={200}/>
    {hovered.taskify&& <button onClick={()=>setIsTaskifyOpen(true)} className={styles.button}>일정 관리 사이트 </button>}
   </div>
   {isTaskifyOpen&& <TaskifyModal closeClick={()=>setIsTaskifyOpen(false)}/>}
   <div className={styles.imageWrapper}
   onMouseEnter={()=> setHoverd((prev)=>({...prev, rolling:true}))}
   onMouseLeave={()=>setHoverd((prev)=>({...prev, rolling:false}))}
   >

     {hovered.rolling&& <button onClick={()=>setIsRollingOpen(true)} className={styles.button}>롤링 페이지 사이트 </button>}
  </div>
  {isRollingOpen&&<RollingMdoal closeClick={()=>setIsRollingOpen(false)}/>}
  </div>)
}