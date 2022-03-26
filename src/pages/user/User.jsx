import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import "./User.css"

const User = () => {
    return (
        <div className='user'>
            <div className='userTitleContainer'>
                <h1 className='userTitle'>Edit User</h1>
                <Link to="/newUser">
                    <button className='userAddButton'>Create</button>
                </Link>
            </div>

            <div className='userContainer'>
                <div className='userShow'>
                    <div className='userShowTop'>
                        <img
                            src="https://i.guim.co.uk/img/media/d31ebd49b32a5aa609a584ababb1e03bc70b4942/573_213_2929_1758/master/2929.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=31c49726c022c1d41ee9b9b6b7254b46"
                            alt=""
                            className='userShowImg'
                        />
                        <div className='userShowTopTitle'>
                            <span className='userShowUsername'>Kiran Baby</span>
                            <span className='userShowUserTitle'>SDE at Meta</span>
                        </div>
                    </div>
                    <div className='userShowBottom'>
                        <span className='userShowTitle'>Account Details</span>
                        <div className='userShowInfo'>
                            <PermIdentity className='userShowIcon' />
                            <span className='userShowInfoTitle'>Kb14</span>
                        </div>

                        <div className='userShowInfo'>
                            <CalendarToday className='userShowIcon' />
                            <span className='userShowInfoTitle'>14.08.1998</span>
                        </div>

                        <span className='userShowTitle'>Conatact Details</span>

                        <div className='userShowInfo'>
                            <PhoneAndroid className='userShowIcon' />
                            <span className='userShowInfoTitle'>+9179374789</span>
                        </div>

                        <div className='userShowInfo'>
                            <MailOutline className='userShowIcon' />
                            <span className='userShowInfoTitle'>kb@gmail.com</span>
                        </div>

                        <div className='userShowInfo'>
                            <LocationSearching className='userShowIcon' />
                            <span className='userShowInfoTitle'>India, Kerala</span>
                        </div>

                    </div>
                </div>
                <div className='userUpdate'>
                    <sapn className='userUpdateTitle'>Edit</sapn>
                    <form className='userUpdateForm'>
                        <div className='userUpdateLeft'>
                            <div className='userUpdateItem'>
                                <label>Username</label>
                                <input type="text"
                                    placeholder='kb14'
                                    className='userUpdateInput'
                                />
                            </div>
                            <div className='userUpdateItem'>
                                <label>Full Name</label>
                                <input type="text"
                                    placeholder='Kiran Baby'
                                    className='userUpdateInput'
                                />
                            </div>
                            <div className='userUpdateItem'>
                                <label>Email</label>
                                <input type="text"
                                    placeholder='kb@gmail.com
'
                                    className='userUpdateInput'
                                />
                            </div>
                            <div className='userUpdateItem'>
                                <label>Phone</label>
                                <input type="text"
                                    placeholder='+9179374789'
                                    className='userUpdateInput'
                                />
                            </div>
                            <div className='userUpdateItem'>
                                <label>Address</label>
                                <input type="text"
                                    placeholder='India, Kerala'
                                    className='userUpdateInput'
                                />
                            </div>
                        </div>

                        <div className='userUpdateRight'>
                            <div className='userUpdateUpload'>
                                <img
                                    className='userUpdateImg'
                                    src="https://i.guim.co.uk/img/media/d31ebd49b32a5aa609a584ababb1e03bc70b4942/573_213_2929_1758/master/2929.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=31c49726c022c1d41ee9b9b6b7254b46"
                                    alt=""
                                />
                                <label htmlFor='file'>
                                    <Publish className='userUpdateIcon' />
                                </label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <button className='userUpdateButton'>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User