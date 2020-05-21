
import React, { useState, useEffect } from 'react';
import FeaturesInterface from '../../Interfaces/features.interface';
import FeaturesModel from '../../Models/features.model';
import FeatureInterface from '../../Interfaces/feature.interface';
import Features from '../Features/features.component'

function Part(props: any) {

  const [feature, setFeature] = useState<FeaturesInterface>(FeaturesModel);

  useEffect( () => {
    if (props.feature){
      const feat:FeaturesInterface = props.feature
      setFeature(feat);
    }
  }, [props])

  function getBackgroundFeature(feature:FeaturesInterface) {
    let color: string = "success"
    feature.features.forEach( feat => {
      if (feat.dev > feat.dif * 0.7 && feat.dev < feat.dif){
        if (color === "success") color = "warning"
      } else if (feat.dev >= feat.dif) {
        color = "danger"
      } 
    })
    return color
  }

  return (
    <>
      <div className={"features-title "+ getBackgroundFeature(feature)}>{feature.name}</div>
      <table className="features-data">
        <thead>
          <tr>
            <th scope="col">Control</th>
            <th scope="col">dev</th>
            <th scope="col">dev_out_tol</th>
            <th scope="col">dif</th>
            <th scope="col">state</th>
          </tr>
        </thead>
        <tbody>
          {
            feature.features.map( (feature:FeatureInterface, keyf: number) => (
              <tr key={keyf}>
                <Features feature={feature} />
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
}

export default Part;
