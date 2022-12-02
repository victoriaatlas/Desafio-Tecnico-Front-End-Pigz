import React, { useState, useEffect } from 'react';
import TextAboutMarketplace from "../Components/TextAboutMarketplace";
import TextAboutSupportCard from "../Components/TextAboutSupportCard";
import TextAboutPigzManagement from '../Components/TextAboutPigzManagement';
import TextAboutDelivery from '../Components/TextAboutDelivery';
import TextAboutOnlinePay from '../Components/TextAboutOnlinePay';
import { Button, Section, Input } from "../Styles/SupportContent"


function SupportPigz() {
 const [component, setComponent] = useState([])
 const [indexComponent, setIndexComponent] = useState(1)
 
  const components = [
    (<TextAboutMarketplace />),
    (<TextAboutPigzManagement />),
    (<TextAboutDelivery />),
    (<TextAboutOnlinePay />)
  ];

  useEffect(() => {
   const verifyIndex = () => {
      setComponent(components[0])
    }

   verifyIndex()
  }, [])

  

  const renderContentPage = (indexC) => {
    setIndexComponent(indexC)
   if (indexC > 3) {
      setIndexComponent(0)
   }
   
   const finderIndex = components.filter((c, index) => index === indexComponent && c )

   return setComponent(finderIndex);
};


  return (
    <div>
      <Section>
        <Input className="input-button" value=" " type="button" onClick={ () => setComponent(components[0]) }/>
        <Input className="input-button" value=" " type="button" onClick={ () => setComponent(components[1]) }/>
        <Input className="input-button" value=" " type="button" onClick={ () => setComponent(components[2]) }/>
        <Input className="input-button" value=" " type="button" onClick={ () => setComponent(components[3]) }/>
      </Section>
      <Button onClick={ () => renderContentPage(indexComponent + 1) }>
      <section>{ component }</section>
      </Button>
      <TextAboutSupportCard />
    </div>
  );
}
  
  export default SupportPigz;
  