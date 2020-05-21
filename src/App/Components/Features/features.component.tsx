import React, { useState, useEffect } from 'react';
import FeatureInterface from '../../Interfaces/feature.interface';
import FeatureModel from '../../Models/feature.model';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faExclamationCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import './features.style.scss'

function Part(props: any) {

  const [feature, setFeature] = useState<FeatureInterface>(FeatureModel[0]);

  useEffect( () => {
    if (props.feature){
      const feat:FeatureInterface = props.feature
      setFeature(feat);
    }
  }, [props])

  return (
    <>
      <td className={feature.dev >= feature.dif ?"color-danger":""}>{feature.control}</td>
      <td className={feature.dev >= feature.dif ?"color-danger":""}>{feature.dev}</td>
      <td className={feature.dev >= feature.dif ?"color-danger":""}>{feature.dif - feature.dev < 0 ? (feature.dif - feature.dev)*-1 :0}</td>
      <td className={feature.dev >= feature.dif ?"color-danger":""}>{feature.dif}</td>
      <td>
        {
          (feature.dev > feature.dif * 0.7) ? (
              (feature.dev >= feature.dif) ? (
                <FontAwesomeIcon className="color-danger" icon={faTimesCircle} />
              ): (
                <FontAwesomeIcon className="color-warning" icon={faExclamationCircle} />
              )
          ) : (
            <FontAwesomeIcon className="color-success" icon={faCheckCircle} />

          )
        }
      </td>
    </>
  );
}

export default Part;
