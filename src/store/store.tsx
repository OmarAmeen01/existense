import { create } from 'zustand'
import { combine } from 'zustand/middleware'
export interface FormState {
  isFormClicked:boolean,
setFormState:(e?:Event)=>void

}

const useStore = create(combine({isFormClicked:false},(set) => ({
 
 setFromState: () => set((state) => ({isFormClicked:!state.isFormClicked  })),

})))
export default useStore