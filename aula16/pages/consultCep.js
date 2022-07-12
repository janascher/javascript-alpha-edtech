export function consultCep() {
    
    console.log("cep")

    return `
        <section id="info-cep">
            <table border="1">
                <thead>
                    <tr>
                        <th>Endereço</th>
                        <th>Bairro</th>
                        <th>Cidade</th>
                        <th>Estado</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Teste</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table><br />

            <button id="view-map-button" class="viewMapButton" type="button">Exibir mapa</button>
        </section>
    `
};