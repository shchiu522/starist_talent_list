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


const Talent = (props) => (<div key={props.item} className='talent-item'>
  <div className='text-container'>
    <h3>王曉霖</h3>
    <h5>
      Viu - Tobot - 奧花
    </h5>
  </div>
  <img src={arrow}></img>
</div>);