import React from 'react';
import TarotCard from './TarotCard';


const CardContainer = React.memo(

    function CardContainer(props){
        const cardType = props.name
        let imgSrcs = []
    
        const selectImage = (image) => {
            props.selectImage(image)
        }
    
    
        const importAll = (r)=> {
            return r.keys().map(r);
          }
    
        const getCards = () => {
            let modules = []
            switch (cardType) {
                case "trumps":
                   modules= importAll(
                        require.context("../Assets/MajorArcana", false, /\.(png)$/)
                      )
                    
                    modules.forEach(module => {
                        let imgSrc= module.default
                        imgSrcs.push(imgSrc)
                    });
                      
                    break;
                case "cups":
                    modules= importAll(
                        require.context("../Assets/MinorArcana/Cups", false, /\.(png)$/)
                      )
                    
                    modules.forEach(module => {
                        let imgSrc= module.default
                        imgSrcs.push(imgSrc)
                    });
                      
                    break;
            
                case "swords":
                    modules= importAll(
                        require.context("../Assets/MinorArcana/Swords", false, /\.(png)$/)
                      )
                    
                    modules.forEach(module => {
                        let imgSrc= module.default
                        imgSrcs.push(imgSrc)
                    });
                      
                    break;
                case "wands":
                    modules= importAll(
                        require.context("../Assets/MinorArcana/Wands", false, /\.(png)$/)
                      )
                    
                    modules.forEach(module => {
                        let imgSrc= module.default
                        imgSrcs.push(imgSrc)
                    });
                    break;
                case "pentacles":
                    modules= importAll(
                        require.context("../Assets/MinorArcana/Pentacles", false, /\.(png)$/)
                      )
                    
                    modules.forEach(module => {
                        let imgSrc= module.default
                        imgSrcs.push(imgSrc)
                    });
                    break;
    
                default:
                    break;
            }
    
        }

 
    
        const makeCards = () => {
            let order= imgSrcs.sort(() => Math.random() - 0.5)
           return (
            order.map((src, i)=> {
                return(
                    <TarotCard key={i} selectImage={selectImage} imagePath={src} />
                )
            })
           ) 
        }
    
    
    getCards()
    
    
        return(
      
           <div id={props.name} style= {{paddingBottom:'5%' }}>
               <h5 style={{ borderTop:'1px', borderTopColor:'burlywood', borderTopStyle:'groove', padding:'1em', fontFamily:'Rajdhani', fontWeight:'bold'}}>{props.name.toUpperCase()}</h5>
               {
                   makeCards()
               }
           </div>
        )
    }
)

export default CardContainer