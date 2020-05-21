import axios from 'axios'
import FeaturesInterface from '../Interfaces/features.interface'

export async function getFeatures() {
  const resp:any = await axios.get('http://localhost:4000/api/getFeatures')
  const features:FeaturesInterface[] = resp.data
  return features
}
