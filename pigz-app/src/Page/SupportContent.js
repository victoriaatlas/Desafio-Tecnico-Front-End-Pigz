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
      const input1 = document.getElementById("input-1");
      setComponent(components[0])
      input1.style.backgroundColor = '#FF881F'

    }

   verifyIndex()
  }, [])


    const activeColorInput = () => {
    const input1 = document.getElementById("input-1");
    const input2 = document.getElementById("input-2");
    const input3 = document.getElementById("input-3")
    const input4 = document.getElementById("input-4")

      indexComponent === 0
      ? input1.style.backgroundColor = '#FF881F'
      : input1.style.backgroundColor = '#EEEEEE'
      
      indexComponent === 1
      ? input2.style.backgroundColor = '#FF881F'
      : input2.style.backgroundColor = '#EEEEEE'

      indexComponent === 2
      ? input3.style.backgroundColor = '#FF881F'
      : input3.style.backgroundColor = '#EEEEEE'

      indexComponent === 3
      ? input4.style.backgroundColor = '#FF881F'
      : input4.style.backgroundColor = '#EEEEEE'

  }

  const renderContentPage = (indexC) => {
    setIndexComponent(indexC)
   if (indexC > 3) {
      setIndexComponent(0)
   }
   
   const finderIndex = components.filter((c, index) => index === indexComponent && c )

   activeColorInput()

   return setComponent(finderIndex);
};


  return (
    <div>
      <Section>
        <Input  id="input-1" value=" " type="button" onClick={ () => setComponent(components[0]) }/>
        <Input  id="input-2" value=" " type="button" onClick={ () => setComponent(components[1]) }/>
        <Input  id="input-3" value=" " type="button" onClick={ () => setComponent(components[2]) }/>
        <Input  id="input-4" value=" " type="button" onClick={ () => setComponent(components[3]) }/>
      </Section>
      <Button  id="3"
      type="button"
      onClick={() => renderContentPage(indexComponent + 1)}
      >
      <section
      >{ component }</section>
      </Button>
      <TextAboutSupportCard />
    </div>
  );
}
  
  export default SupportPigz;
  