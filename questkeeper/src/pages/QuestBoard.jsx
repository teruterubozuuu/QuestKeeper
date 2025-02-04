import React from 'react'
import {signOut } from "firebase/auth";
import { auth} from "../firebase";
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import "./QuestBoard.css"
import AddQuest from '../components/AddQuest';


export default function HomePage() {



  return (
    <>
      <Header></Header>
      <div className='questboard-parent-container'>
        <div className='page-title'><h1 className="text-3xl font-bold">QUEST BOARD</h1></div>

        <div className='quest-cards-container'>
          <AddQuest/>
        </div>
      
      </div>
    </>

  )
}
