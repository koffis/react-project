import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import jobTrue from '../../common/Images/workTrue.svg'
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return (
            <Preloader/>
        )
    }

    return (
        <div>
            <div className={s.profileInfoPlace}>
                <div className={s.avatar}>
                    <img alt={'profileImage'} src={props.profile.photos.large}/><br></br>
                </div>
                <div className={s.infoPlace}>
                    <div className={s.infoPlaceStatus}>
                        <h4>{props.profile.fullName}</h4>
                        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                        <p>About me:{props.profile.aboutMe}</p>
                        <p>Looking for a job:<img alt={'workRef'} src={jobTrue}/></p>
                        <p>Job description: {props.profile.lookingForAJobDescription}</p>
                    </div>
                    <div className={s.socialNetworks}>
                        <p>Facebook:{props.profile.contacts.facebook}</p>
                        <p>Website:{props.profile.contacts.website}</p>
                        <p>VK:{props.profile.contacts.vk}</p>
                        <p>Twitter:{props.profile.contacts.twitter}</p>
                        <p>Instagram:{props.profile.contacts.instagram}</p>
                        <p>YouTube:{props.profile.contacts.youtube}</p>
                        <p>GitHub:{props.profile.contacts.github}</p>
                        <p>Main link:{props.profile.contacts.mainLink}</p>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo;