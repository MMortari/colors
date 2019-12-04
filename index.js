const colors = chroma.scale(['#fafa6e','#2A4858']).mode('lch').colors(15);

const app = $('.app');

app.append('<div id="3"></div>');
app.append('<div id="1"></div>');
app.append('<div id="2"></div>');

colors.map(color => {
  app.find('#1').append(`<span style="background-color: ${color}">${color}</span>`)
  app.find('#2').append(`<span style="background-color: ${chroma(color).darken()}">${chroma(color).darken()}</span>`)
  app.find('#3').append(`<span style="background-color: ${chroma(color).brighten()}">${chroma(color).brighten()}</span>`)
})