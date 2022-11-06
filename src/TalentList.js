import arrow from './assets/arrow.svg';

export const TalentList = (props) => {

  return (
    <div className='talent-list-container'>
      {props.talent.map(i => (
        <Talent item={i} />
      ))}
    </div>
  );
};



function BlueArrow() {
  return (<svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M0 8.99999C0 8.66847 0.131696 8.35053 0.366117 8.11611C0.600537 7.88169 0.918479 7.74999 1.25 7.74999H15.7325L10.365 2.38499C10.1303 2.15028 9.99842 1.83193 9.99842 1.49999C9.99842 1.16805 10.1303 0.849709 10.365 0.614992C10.5997 0.380276 10.9181 0.248413 11.25 0.248413C11.5819 0.248413 11.9003 0.380276 12.135 0.614992L19.635 8.11499C19.7514 8.23111 19.8438 8.36905 19.9068 8.52091C19.9698 8.67277 20.0022 8.83557 20.0022 8.99999C20.0022 9.16441 19.9698 9.32721 19.9068 9.47908C19.8438 9.63094 19.7514 9.76888 19.635 9.88499L12.135 17.385C11.9003 17.6197 11.5819 17.7516 11.25 17.7516C10.9181 17.7516 10.5997 17.6197 10.365 17.385C10.1303 17.1503 9.99842 16.8319 9.99842 16.5C9.99842 16.1681 10.1303 15.8497 10.365 15.615L15.7325 10.25H1.25C0.918479 10.25 0.600537 10.1183 0.366117 9.88388C0.131696 9.64946 0 9.33151 0 8.99999Z" fill="#91CDF1" />
  </svg>);
}


const Talent = (props) => (<div key={props.item} className='talent-item'>
  <div className='text-container'>
    <h3>王曉霖</h3>
    <span>
      <h5>
        Viu - Tobot - 奧花
      </h5>
      <BlueArrow />
      {/* <img src={arrow}></img> */}
    </span>
  </div>
</div>);