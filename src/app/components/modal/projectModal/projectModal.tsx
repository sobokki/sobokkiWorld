'use client'
import { useState } from "react";
import styles from "@/app/components/modal/modalContainer.module.scss"
import ModalContainer from "../modalContainer"


export default function ProjectModal(){
  const[isModalOpen,setIsModalOpen]=useState<boolean>(true);
  const closeModal=()=>{
  setIsModalOpen(false);
}
  return(<>
{isModalOpen &&<ModalContainer closeClick={closeModal} children={
<div></div>


}/>}

  </>)
}