import { MarkerF, OverlayView } from '@react-google-maps/api'
import React, { useContext } from 'react'
import BusinessItem from './BusinessItem'
import { SelectedBusinessContext } from '@/context/SelectedBusinessContext'

function Markers({business}) {
  const GOOGLE_API_KEY=process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  const photo_ref=business?.photos?business?.photos[0]?.photo_reference:''
    const {selectedBusiness,setSelectedBusiness}=useContext(SelectedBusinessContext)
  return (
    <div>
        <MarkerF
                position={business.geometry.location}
                onClick={()=>setSelectedBusiness(business)}
                icon={{

                  url: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo_ref}&key=${GOOGLE_API_KEY}`,
                  scaledSize:{
                    width:50,
                    height:50,
                   
                  }
                  
       


                }}
                
        >
         {selectedBusiness.reference==business.reference?   
         <OverlayView
            position={business.geometry.location}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            >
            <div className='ml-[-90px] mt-[-230px]'>
                <BusinessItem business={business} showDir={true} />
            </div>
            </OverlayView>:null}
            </MarkerF>
    </div>
  )
}

export default Markers