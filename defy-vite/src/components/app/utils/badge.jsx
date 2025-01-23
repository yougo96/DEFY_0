// React
import { useEffect } from "react"
// Libs
// Files
import { useFetch } from "../../../assets/hooks"

export default function badge ({endpoint, hue}) {
    const { makeRequest, apiData, isLoading, error } = useFetch(endpoint)

    return (
        <div className="badge" style={{'--badge-hue': hue}}>
        {isLoading ? <div>Loading</div> : error ? <div>{error}</div> : apiData && (
          <>
            {apiData.avatar && <img src={apiData.avatar} title={apiData.name} alt="avatar" />}
            <b>{apiData.name}</b>
          </>
        )}
      </div>
    )
}