function carregarTabela(
    cs,
    id,
    propriedades,
) {
    const cabecalho = propriedades.map((p) => `<th>${p}</th>`).join("");
    const itensHtml = cs
        .map((item) => `<tr>${propriedades.map((p) => `<td>${item[p]}</td>`).join("")}</tr>`)
        .join("");

    document.getElementById(id).innerHTML = `<table><tr>${cabecalho}</tr>${itensHtml}</table>`;
}