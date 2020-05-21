import React, { useState, useEffect } from 'react';
import { getFeatures } from '../../Controller/features.controller';
import FeaturesInterface from '../../Interfaces/features.interface';
import Feature from '../Feature/feature.component'
import './part.style.scss'

function Part() {

  const [features, setFeatures] = useState<FeaturesInterface[]>([]);
  
  async function setFeaturesAsync(){

    const fs:FeaturesInterface[] = await getFeatures()
    fs.sort((x:FeaturesInterface, y:FeaturesInterface) => {
      if (x.features.length > y.features.length) {
        return -1;
      } else {
        return 1;
      }
     
    });
    setFeatures(fs);

  }

  useEffect( () => {
    const interval:any = {};
    if (features.length === 0){
       setInterval(() => {
        setFeaturesAsync()
      }, 10000);
    }
    return () => clearInterval(interval);
  }, [features])

  return (
    <div className="part-container">
      { features && features.map( (m_features: FeaturesInterface, key: number) => (
        <div className="features-container" key={key} >
          <Feature feature={m_features}/>
        </div>
      ))}
    </div>
  );
}

export default Part;
