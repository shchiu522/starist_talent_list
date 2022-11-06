import arrow from './assets/arrow.svg';
import { GENDER_FEMALE, GENDER_MALE } from "./constant";

export const TalentList = (props) => {
  return (
    <div className='talent-list-container'>
      {props.children}
    </div>
  );
};

function BlueArrow() {
  return (
    <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M0 8.99999C0 8.66847 0.131696 8.35053 0.366117 8.11611C0.600537 7.88169 0.918479 7.74999 1.25 7.74999H15.7325L10.365 2.38499C10.1303 2.15028 9.99842 1.83193 9.99842 1.49999C9.99842 1.16805 10.1303 0.849709 10.365 0.614992C10.5997 0.380276 10.9181 0.248413 11.25 0.248413C11.5819 0.248413 11.9003 0.380276 12.135 0.614992L19.635 8.11499C19.7514 8.23111 19.8438 8.36905 19.9068 8.52091C19.9698 8.67277 20.0022 8.83557 20.0022 8.99999C20.0022 9.16441 19.9698 9.32721 19.9068 9.47908C19.8438 9.63094 19.7514 9.76888 19.635 9.88499L12.135 17.385C11.9003 17.6197 11.5819 17.7516 11.25 17.7516C10.9181 17.7516 10.5997 17.6197 10.365 17.385C10.1303 17.1503 9.99842 16.8319 9.99842 16.5C9.99842 16.1681 10.1303 15.8497 10.365 15.615L15.7325 10.25H1.25C0.918479 10.25 0.600537 10.1183 0.366117 9.88388C0.131696 9.64946 0 9.33151 0 8.99999Z" fill="#91CDF1" />
    </svg>
  );
}

function PinkArrow() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10 20C10 19.6685 10.1317 19.3505 10.3661 19.1161C10.6005 18.8817 10.9185 18.75 11.25 18.75H25.7325L20.365 13.385C20.1303 13.1503 19.9984 12.8319 19.9984 12.5C19.9984 12.1681 20.1303 11.8497 20.365 11.615C20.5997 11.3803 20.9181 11.2484 21.25 11.2484C21.5819 11.2484 21.9003 11.3803 22.135 11.615L29.635 19.115C29.7514 19.2311 29.8438 19.369 29.9068 19.5209C29.9698 19.6728 30.0022 19.8356 30.0022 20C30.0022 20.1644 29.9698 20.3272 29.9068 20.4791C29.8438 20.6309 29.7514 20.7689 29.635 20.885L22.135 28.385C21.9003 28.6197 21.5819 28.7516 21.25 28.7516C20.9181 28.7516 20.5997 28.6197 20.365 28.385C20.1303 28.1503 19.9984 27.8319 19.9984 27.5C19.9984 27.1681 20.1303 26.8497 20.365 26.615L25.7325 21.25H11.25C10.9185 21.25 10.6005 21.1183 10.3661 20.8839C10.1317 20.6495 10 20.3315 10 20Z" fill="#F19EC2" />
    </svg>
  );
}

export const Talent = (props) => (
  <div key={props.item} onClick={props.onClick} className='talent-item'>
    <div className='text-container' style={{ cursor: "pointer" }} >
      <h3>王曉霖</h3>
      <span>
        <h5>
          Viu - Tobot - 奧花
        </h5>
        {props.gender === GENDER_FEMALE ? <PinkArrow /> : <BlueArrow />}
        {/* <img src={arrow}></img> */}
      </span>
    </div>
  </div>);