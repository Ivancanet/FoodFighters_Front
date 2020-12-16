import React from 'react';


const CreateWine = (props) => {

    const { changeWine, submitWine } = props
    return (
        <div>
            <h1>CreateWine Under Construction</h1>
            <div className='wines'>
                <form onSubmit={submitWine}>
                    <div className="form-group row">
                        <label htmlFor="image" className="col-sm-2 col-form-label">URL</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder='Url de la imagen' name='image' id="image" onChange={(event) => {
                                changeWine(event.target)
                            }} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Nombre</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder='50º Riesling Trocken' name='name' id="name" onChange={(event) => {
                                changeWine(event.target)
                            }} />
                        </div>
                    </div>


                    <div className="form-group row">
                        <label htmlFor="year" className="col-sm-2 col-form-label">Añada</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder='2018' name='year' id="year" onChange={(event) => {
                                changeWine(event.target)
                            }} />
                        </div>
                    </div>


                    <div className="form-group row">
                        <label htmlFor="origin" className="col-sm-2 col-form-label">D.O</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder='Rheingau, Alemania' name='origin' id="origin" onChange={(event) => {
                                changeWine(event.target)
                            }} />
                        </div>
                    </div>


                    <div className="form-group row">
                        <label htmlFor="wineType" className="col-sm-2 col-form-label">Tipo</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder='Blanco' name='wineType' id="wineType" onChange={(event) => {
                                changeWine(event.target)
                            }} />
                        </div>
                    </div>


                    <div className="form-group row">
                        <label htmlFor="grapeType" className="col-sm-2 col-form-label">Uva</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder='Riesling' name='grapeType' id="grapeType" onChange={(event) => {
                                changeWine(event.target)
                            }} />
                        </div>
                    </div>


                    <div className="form-group row">
                        <label htmlFor="wineSensation" className="col-sm-2 col-form-label">Desc.</label>

                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder='Tranquilo, Citrico' name='wineSensation' id="wineSensation" onChange={(event) => {
                                changeWine(event.target)
                            }} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="cellar" className="col-sm-2 col-form-label">Bodega</label>

                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder='50 Grad' name='cellar' id="cellar" onChange={(event) => {
                                changeWine(event.target)
                            }} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="pvp" className="col-sm-2 col-form-label">PVP</label>

                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder='15€' name='pvp' id="pvp" onChange={(event) => {
                                changeWine(event.target)
                            }} />
                        </div>
                    </div>

                    <button type='submit'>Create Wine</button>

                    <br />

                </form>

            </div>
        </div>
    );
};

export default CreateWine;