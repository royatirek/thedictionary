import React from 'react';

const resultPage = ({data,isLoadingMeaning, query}) => {
    //console.log(data);
    function italicToSentence(sentence){
        let index= sentence.indexOf(":");
        if(index<=0){
            return sentence;
        }
        else
            return sentence.substring(0,index)+"<b><i>"+sentence.substring(index)+"</i></b>"; 
    }

    function removeDotsFromCategory(category){
        return category.replace(/·/g,"")
    }
    if(isLoadingMeaning===true)
        {
            if(query) {
                return (<div className="sk-circle">
                    <div className="sk-circle1 sk-child"></div>
                    <div className="sk-circle2 sk-child"></div>
                    <div className="sk-circle3 sk-child"></div>
                    <div className="sk-circle4 sk-child"></div>
                    <div className="sk-circle5 sk-child"></div>
                    <div className="sk-circle6 sk-child"></div>
                    <div className="sk-circle7 sk-child"></div>
                    <div className="sk-circle8 sk-child"></div>
                    <div className="sk-circle9 sk-child"></div>
                    <div className="sk-circle10 sk-child"></div>
                    <div className="sk-circle11 sk-child"></div>
                    <div className="sk-circle12 sk-child"></div>
                </div>)
            } else return <script/>
        } 
    return(
            <div className = "card-body no-gutters align-items-center resultsPage">
                <h1>{data['wordContent']['mainWord']}</h1>
                <h3> {data['wordContent']['pronunciation']}</h3>
                <br/>



                <ol>
                {data["wordContent"]["allMeanings"].map((array)=>
                <div>
                <h5>{array['category']!=="" && removeDotsFromCategory(array['category'])}</h5>
                    {array["meanings"].map((listOfMeanings,index)=>
                        <li dangerouslySetInnerHTML={{__html:italicToSentence(listOfMeanings)}}></li>)}
                    <br/>
                </div>
                )}
                </ol>
                
                { data['wordContent']['otherBlocks'].map(array=>
                <div>
                    <h4>{array['name']==="Related Words" && array['name']}</h4>
                    <p>{array['name']==="Related Words" && array['content'].map(array=>
                    <li>{removeDotsFromCategory(array)}</li> )}
                    </p>
                </div>
                )}

                {data['wordContent']['otherBlocks'].map(array=>
                <div>
                    <h4>{array['name']==="Synonyms" && array['name']}</h4>
                    <p>{array['name']==="Synonyms" && array['content']}</p>
                </div>
                )}

                { data['wordContent']['otherBlocks'].map(array=>
                <div>
                    <h4>{array['name']==="Antonyms" && array['name']}</h4>
                    <p>{array['name']==="Antonyms" && array['content']}</p>
                </div>
                )}


                { data['wordContent']['otherBlocks'].map(array=>
                <div>
                    <h4>{array['name']==="Try these things" && array['name']}</h4>
                    <p>{array['name']==="Try these things" && array['content'].map(array=>
                    <li>{array}</li> )}
                    </p>
                </div>
                )}



                
                {data['addSentences']!=="nan" && <h4>Examples</h4>}
                <ul>
                { data['addSentences']!=="nan" && 
                    JSON.parse(data['addSentences']).map((array)=>
                  <li dangerouslySetInnerHTML={{__html:array}}></li>  
                )}
                </ul>
                


                 
                {data['mnemonics']&& <h4>Mnemonics</h4>}
                <ul>
                { data['mnemonics'] && 
                    JSON.parse(data['mnemonics']).map((array)=>
                   <li>{array}</li>
                )}
                </ul>

            </div>      
   
        );
}

export default resultPage;