'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    google: any
  }
}

export default function GoogleMap() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadGoogleMaps = () => {
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
      script.async = true
      script.defer = true
      script.onload = initMap
      document.head.appendChild(script)
    }

    const initMap = () => {
      const location = { lat: 37.6195, lng: 127.0766 } // 노원구 덕릉로 738 정진145빌딩의 대략적인 좌표
      const map = new window.google.maps.Map(mapRef.current, {
        center: location,
        zoom: 17,
        styles: [
          {
            featureType: 'all',
            elementType: 'all',
            stylers: [{ color: '#f8f9fa' }]
          }
        ]
      })

      new window.google.maps.Marker({
        position: location,
        map,
        title: '빅토리아영어학원'
      })
    }

    loadGoogleMaps()
  }, [])

  return (
    <div 
      ref={mapRef} 
      className="w-full h-[400px] rounded-lg shadow-lg"
    />
  )
} 