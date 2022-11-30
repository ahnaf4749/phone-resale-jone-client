import React from 'react';

const Deletemodal = ({ title, message, deleteModal, handleDelete, handleCancel }) => {
    return (
        <div>
            <input type="checkbox" id="confarmetion-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => handleDelete(deleteModal)} htmlFor="confarmetion-modal" className="btn">Delete</label>
                        <button onClick={handleCancel} className='btn btn-nav-xs'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Deletemodal;