import React from "react";
import "./QuestCards.css";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import "./AddQuest.css"

export default function AddQuest() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="quest-card" onClick={handleShow}>
        <div className="addquest">
          <div>
            <h3>+</h3>
            <h6>Add Quest</h6>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
          <Modal.Title>Add Quest</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <label for="quest-name">Quest Name</label>
        <input type="text" id="quest-name" class="nes-input"></input>
        <br/><br/>
        <div className="xp-gold-gain-container">
            <div>
                <label for="quest-name">XP gain</label>
                <input type="number" id="quest-name" class="nes-input" placeholder="0"></input>
            </div>

            <div>
                <label for="quest-name">Gold gain</label>
                <input type="number" id="quest-name" class="nes-input"  placeholder="0"></input>
            </div>  
        </div>
        <br/>
        <label for="default_select">Difficulty</label>
        <div class="nes-select">
            <select required id="default_select">
                <option value="" disabled selected hidden>Select...</option>
                <option value="0">Easy</option>
                <option value="1">Medium</option>
                <option value="3">Hard</option>
            </select>
        </div>
        <br/>
        <label for="default_select">Status</label>
        <div class="nes-select">
            <select required id="default_select">
                <option value="" disabled selected hidden>Select...</option>
                <option value="0">Not Started</option>
                <option value="1">Ongoing</option>
                <option value="3">Completed</option>
            </select>
        </div>

       
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose}>
            Add
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
