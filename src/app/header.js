import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Background from './images/pirate-mod.jpg'
import RaisedButton from 'material-ui/RaisedButton';

const Header = (props) => {
  return (
    <Card>
      <CardMedia
        overlay={<CardTitle title="Yarrr, Landlubbers!" subtitle={
        <div>
          <div className='row' style={{position: 'absolute', top: -65}}>
            <svg className='clickable'
              onClick={() => {
                window.router('/config')
              }}
              fill='white' style={{height: 45, margin: 4}} viewBox="0 0 932.179 932.179">
              <g>
                <path d="M61.2,341.538c4.9,16.8,11.7,33,20.3,48.2l-24.5,30.9c-8,10.1-7.1,24.5,1.9,33.6l42.2,42.2c9.1,9.1,23.5,9.899,33.6,1.899
                  l30.7-24.3c15.8,9.101,32.6,16.2,50.1,21.2l4.6,39.5c1.5,12.8,12.3,22.4,25.1,22.4h59.7c12.8,0,23.6-9.601,25.1-22.4l4.4-38.1
                  c18.8-4.9,36.8-12.2,53.7-21.7l29.7,23.5c10.1,8,24.5,7.1,33.6-1.9l42.2-42.2c9.1-9.1,9.9-23.5,1.9-33.6l-23.1-29.3
                  c9.6-16.601,17.1-34.3,22.1-52.8l35.6-4.1c12.801-1.5,22.4-12.3,22.4-25.1v-59.7c0-12.8-9.6-23.6-22.4-25.1l-35.1-4.1
                  c-4.801-18.3-12-35.8-21.199-52.2l21.6-27.3c8-10.1,7.1-24.5-1.9-33.6l-42.1-42.1c-9.1-9.1-23.5-9.9-33.6-1.9l-26.5,21
                  c-17.2-10.1-35.601-17.8-54.9-23l-4-34.3c-1.5-12.8-12.3-22.4-25.1-22.4h-59.7c-12.8,0-23.6,9.6-25.1,22.4l-4,34.3
                  c-19.8,5.3-38.7,13.3-56.3,23.8l-27.5-21.8c-10.1-8-24.5-7.1-33.6,1.9l-42.2,42.2c-9.1,9.1-9.9,23.5-1.9,33.6l23,29.1
                  c-9.2,16.6-16.2,34.3-20.8,52.7l-36.8,4.2c-12.8,1.5-22.4,12.3-22.4,25.1v59.7c0,12.8,9.6,23.6,22.4,25.1L61.2,341.538z
                  M277.5,180.038c54.4,0,98.7,44.3,98.7,98.7s-44.3,98.7-98.7,98.7c-54.399,0-98.7-44.3-98.7-98.7S223.1,180.038,277.5,180.038z"/>
                <path d="M867.699,356.238l-31.5-26.6c-9.699-8.2-24-7.8-33.199,0.9l-17.4,16.3c-14.699-7.1-30.299-12.1-46.4-15l-4.898-24
                  c-2.5-12.4-14-21-26.602-20l-41.1,3.5c-12.6,1.1-22.5,11.4-22.9,24.1l-0.799,24.4c-15.801,5.7-30.701,13.5-44.301,23.3
                  l-20.799-13.8c-10.602-7-24.701-5-32.9,4.7l-26.6,31.7c-8.201,9.7-7.801,24,0.898,33.2l18.201,19.399
                  c-6.301,14.2-10.801,29.101-13.4,44.4l-26,5.3c-12.4,2.5-21,14-20,26.601l3.5,41.1c1.1,12.6,11.4,22.5,24.1,22.9l28.1,0.899
                  c5.102,13.4,11.801,26.101,19.9,38l-15.699,23.7c-7,10.6-5,24.7,4.699,32.9l31.5,26.6c9.701,8.2,24,7.8,33.201-0.9l20.6-19.3
                  c13.5,6.3,27.699,11,42.299,13.8l5.701,28.2c2.5,12.4,14,21,26.6,20l41.1-3.5c12.6-1.1,22.5-11.399,22.9-24.1l0.9-27.601
                  c15-5.3,29.199-12.5,42.299-21.399l22.701,15c10.6,7,24.699,5,32.9-4.7l26.6-31.5c8.199-9.7,7.799-24-0.9-33.2l-18.301-19.399
                  c6.701-14.2,11.602-29.2,14.4-44.601l25-5.1c12.4-2.5,21-14,20-26.601l-3.5-41.1c-1.1-12.6-11.4-22.5-24.1-22.9l-25.1-0.8
                  c-5.201-14.6-12.201-28.399-20.9-41.2l13.699-20.6C879.4,378.638,877.4,364.438,867.699,356.238z M712.801,593.837
                  c-44.4,3.801-83.602-29.3-87.301-73.699c-3.801-44.4,29.301-83.601,73.699-87.301c44.4-3.8,83.602,29.301,87.301,73.7
                  C790.301,550.938,757.199,590.138,712.801,593.837z"/>
                <path d="M205,704.438c-12.6,1.3-22.3,11.899-22.4,24.6l-0.3,25.3c-0.2,12.7,9.2,23.5,21.8,25.101l18.6,2.399
                  c3.1,11.301,7.5,22.101,13.2,32.301l-12,14.8c-8,9.899-7.4,24.1,1.5,33.2l17.7,18.1c8.9,9.1,23.1,10.1,33.2,2.3l14.899-11.5
                  c10.5,6.2,21.601,11.101,33.2,14.5l2,19.2c1.3,12.6,11.9,22.3,24.6,22.4l25.301,0.3c12.699,0.2,23.5-9.2,25.1-21.8l2.3-18.2
                  c12.601-3.101,24.601-7.8,36-14l14,11.3c9.9,8,24.101,7.4,33.201-1.5l18.1-17.7c9.1-8.899,10.1-23.1,2.301-33.2L496.6,818.438
                  c6.6-11,11.701-22.7,15.201-35l16.6-1.7c12.6-1.3,22.299-11.9,22.4-24.6l0.299-25.301c0.201-12.699-9.199-23.5-21.799-25.1
                  l-16.201-2.1c-3.1-12.2-7.699-24-13.699-35l10.1-12.4c8-9.9,7.4-24.1-1.5-33.2l-17.699-18.1c-8.9-9.101-23.102-10.101-33.201-2.3
                  l-12.101,9.3c-11.399-6.9-23.6-12.2-36.399-15.8l-1.601-15.7c-1.3-12.601-11.899-22.3-24.6-22.4l-25.3-0.3
                  c-12.7-0.2-23.5,9.2-25.101,21.8l-2,15.601c-13.199,3.399-25.899,8.6-37.699,15.399l-12.5-10.2c-9.9-8-24.101-7.399-33.201,1.5
                  l-18.2,17.801c-9.1,8.899-10.1,23.1-2.3,33.199l10.7,13.801c-6.2,11-11.1,22.699-14.3,35L205,704.438z M368.3,675.837
                  c36.3,0.4,65.399,30.301,65,66.601c-0.4,36.3-30.301,65.399-66.601,65c-36.3-0.4-65.399-30.3-65-66.601
                  C302.1,704.538,332,675.438,368.3,675.837z"/>
              </g>
            </svg>
          </div>

          Welcome to ROTB! This is file search engine based on the torrents from the internet. 
          Here you can easily find torrent or file that you intrested for. We are not responsible for any content:
          this is only information about content that collected automatically!
        </div>} />}
      >
        <div className='row' style={{
            padding: '15px',
            background: `url('${Background}') no-repeat`,
            minHeight: 360,
            backgroundSize: 'cover'
          }}>
          <RaisedButton
            label="Search"
            onClick={() => {
              window.router('/')
            }}
            backgroundColor='#69238c'
            labelColor='white'
            style={{height: 60, borderRadius: 6, margin: 5, zIndex: 1}}
            buttonStyle={{borderRadius: 5}}
            icon={<svg fill='white' style={{height: 28}} viewBox="0 0 512 512">
           <g>
             <path d="M310,190c-5.52,0-10,4.48-10,10s4.48,10,10,10c5.52,0,10-4.48,10-10S315.52,190,310,190z"/>
           </g>
           <g>
             <path d="M500.281,443.719l-133.48-133.48C388.546,277.485,400,239.555,400,200C400,89.72,310.28,0,200,0S0,89.72,0,200
               s89.72,200,200,200c39.556,0,77.486-11.455,110.239-33.198l36.895,36.895c0.005,0.005,0.01,0.01,0.016,0.016l96.568,96.568
               C451.276,507.838,461.319,512,472,512c10.681,0,20.724-4.162,28.278-11.716C507.837,492.731,512,482.687,512,472
               S507.837,451.269,500.281,443.719z M305.536,345.727c0,0.001-0.001,0.001-0.002,0.002C274.667,368.149,238.175,380,200,380
               c-99.252,0-180-80.748-180-180S100.748,20,200,20s180,80.748,180,180c0,38.175-11.851,74.667-34.272,105.535
               C334.511,320.988,320.989,334.511,305.536,345.727z M326.516,354.793c10.35-8.467,19.811-17.928,28.277-28.277l28.371,28.371
               c-8.628,10.183-18.094,19.65-28.277,28.277L326.516,354.793z M486.139,486.139c-3.78,3.78-8.801,5.861-14.139,5.861
               s-10.359-2.081-14.139-5.861l-88.795-88.795c10.127-8.691,19.587-18.15,28.277-28.277l88.798,88.798
               C489.919,461.639,492,466.658,492,472C492,477.342,489.919,482.361,486.139,486.139z"/>
           </g>
           <g>
             <path d="M200,40c-88.225,0-160,71.775-160,160s71.775,160,160,160s160-71.775,160-160S288.225,40,200,40z M200,340
               c-77.196,0-140-62.804-140-140S122.804,60,200,60s140,62.804,140,140S277.196,340,200,340z"/>
           </g>
           <g>
             <path d="M312.065,157.073c-8.611-22.412-23.604-41.574-43.36-55.413C248.479,87.49,224.721,80,200,80c-5.522,0-10,4.478-10,10
               c0,5.522,4.478,10,10,10c41.099,0,78.631,25.818,93.396,64.247c1.528,3.976,5.317,6.416,9.337,6.416
               c1.192,0,2.405-0.215,3.584-0.668C311.472,168.014,314.046,162.229,312.065,157.073z"/>
           </g>
         </svg>
         
             }
          />
          <RaisedButton
            label="Downloads"
            onClick={() => {
              window.router('/downloads')
            }}
            backgroundColor='#2080E4'
            labelColor='white'
            style={{height: 60, borderRadius: 6, margin: 5, zIndex: 1}}
            buttonStyle={{borderRadius: 5}}
            icon={<svg fill='white' style={{height: 30}} viewBox="0 0 548.176 548.176">
                    <path d="M524.326,297.352c-15.896-19.89-36.21-32.782-60.959-38.684c7.81-11.8,11.704-24.934,11.704-39.399
                      c0-20.177-7.139-37.401-21.409-51.678c-14.273-14.272-31.498-21.411-51.675-21.411c-18.083,0-33.879,5.901-47.39,17.703
                      c-11.225-27.41-29.171-49.393-53.817-65.95c-24.646-16.562-51.818-24.842-81.514-24.842c-40.349,0-74.802,14.279-103.353,42.83
                      c-28.553,28.544-42.825,62.999-42.825,103.351c0,2.474,0.191,6.567,0.571,12.275c-22.459,10.469-40.349,26.171-53.676,47.106
                      C6.661,299.594,0,322.43,0,347.179c0,35.214,12.517,65.329,37.544,90.358c25.028,25.037,55.15,37.548,90.362,37.548h310.636
                      c30.259,0,56.096-10.711,77.512-32.12c21.413-21.409,32.121-47.246,32.121-77.516C548.172,339.944,540.223,317.248,524.326,297.352
                      z M362.595,308.344L262.38,408.565c-1.711,1.707-3.901,2.566-6.567,2.566c-2.664,0-4.854-0.859-6.567-2.566L148.75,308.063
                      c-1.713-1.711-2.568-3.901-2.568-6.567c0-2.474,0.9-4.616,2.708-6.423c1.812-1.808,3.949-2.711,6.423-2.711h63.954V191.865
                      c0-2.474,0.905-4.616,2.712-6.427c1.809-1.805,3.949-2.708,6.423-2.708h54.823c2.478,0,4.609,0.9,6.427,2.708
                      c1.804,1.811,2.707,3.953,2.707,6.427v100.497h63.954c2.665,0,4.855,0.855,6.563,2.566c1.714,1.711,2.562,3.901,2.562,6.567
                      C365.438,303.789,364.494,306.064,362.595,308.344z"/>
                  </svg>
             }
          />
          <RaisedButton
            label="Top"
            onClick={() => {
              window.router('/top')
            }}
            backgroundColor='#B1CE57'
            labelColor='white'
            style={{height: 60, width: 120, borderRadius: 5, margin: 5, zIndex: 1}}
            buttonStyle={{borderRadius: 5}}
            icon={<svg fill='white' style={{height: 30}} viewBox="0 0 284.929 284.929">
                    <g>
                      <path d="M17.128,167.872c1.903,1.902,4.093,2.854,6.567,2.854c2.474,0,4.664-0.952,6.567-2.854L142.466,55.666l112.208,112.206
                        c1.902,1.902,4.093,2.854,6.563,2.854c2.478,0,4.668-0.952,6.57-2.854l14.274-14.277c1.902-1.902,2.847-4.093,2.847-6.563
                        c0-2.475-0.951-4.665-2.847-6.567L149.028,7.419c-1.901-1.906-4.088-2.853-6.562-2.853s-4.665,0.95-6.567,2.853L2.856,140.464
                        C0.95,142.367,0,144.554,0,147.034c0,2.468,0.953,4.658,2.856,6.561L17.128,167.872z"/>
                      <path d="M149.028,117.055c-1.901-1.906-4.088-2.856-6.562-2.856s-4.665,0.953-6.567,2.856L2.856,250.1
                        C0.95,252.003,0,254.192,0,256.67c0,2.472,0.953,4.661,2.856,6.564l14.272,14.276c1.903,1.903,4.093,2.848,6.567,2.848
                        c2.474,0,4.664-0.951,6.567-2.848l112.204-112.209l112.208,112.209c1.902,1.903,4.093,2.852,6.563,2.852
                        c2.478,0,4.668-0.948,6.57-2.852l14.274-14.276c1.902-1.903,2.847-4.093,2.847-6.564c0-2.478-0.951-4.667-2.847-6.57
                        L149.028,117.055z"/>
                    </g>
                  </svg>
             }
          />
          {
						!window.currentWindow.isModal()
						&&
						<div className='fs0-85 pad0-75 column peers-status' style={{marginLeft: 'auto', marginTop: '-10px', color: window.peers > 0 ? '#42f445' : 'white'}}>
              <div>rats peers: {window.peers} [{window.peersTorrents} torrents] {window.peers > 0 ? ' (p2p rats search enabled)' : ' (p2p rats search not available at this moment)'}</div>
              {
                window.p2pStatus == 0
                &&
                <div style={{color: 'red'}}>external connections not available (check port forwarding)</div>
              }
              {
                window.p2pStatus == 1
                &&
                <div style={{color: 'orange'}}>port not available, but connections redirected</div>
              }
              {
                window.p2pStatus == 2
                &&
                <div style={{color: 'green'}}>port connections fully available</div>
              }
						</div>
          }
        </div>
      </CardMedia>
    </Card>
  )
}

export {Header}
