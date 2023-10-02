import React,{useEffect,useState} from 'react'

const data =[
    {
        id: 1,
        h: "heading",
        con: "Some quick example ."

    },
    {
        id: 2,
        h: "heading2",
        con: "Some quick example ."

    },
    {
        id: 3,
        h: "heading3",
        con: "Some quick example ."

    }
]
const Testing = () => {
    const [data, setData] = useState([]);
    function getData() {
        fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setData(json))
        
    }
    console.log("data testing.....",data)
    useEffect(() => {
      getData()
      
    }, []);
    return (
        <div className='row m=0'>
            {
                data.slice(0,6).map((e) => (
                    <div className='col-lg-4 col-md-6 col-sm-12' key={e.id}>
                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src="..." alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">static</h5>
                                <p className="card-text">{e.title}</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                ))
                
            }



        </div>
    )

}

export default Testing
