import dash
import dash_core_components as dcc
import dash_html_components as html
from dash.dependencies import Input, Output
import pandas as pd
import plotly.express as px

# Load data
df = pd.read_csv('Data_Problem_2(1).csv')

# Create a list of all months and other period labels
columns = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC', 'ANNUAL', 'JAN-FEB', 'MAR-MAY', 'JUN-SEP', 'OCT-DEC']

# Initialize the Dash app
app = dash.Dash(__name__)

# Define the layout of the app
app.layout = html.Div([
    html.H1("Mean Temperature Dashboard"),
    dcc.Dropdown(
        id='month-dropdown',
        options=[{'label': month, 'value': month} for month in columns],
        value='ANNUAL'
    ),
    dcc.Graph(id='temp-graph')
])

# Callback to update graph based on dropdown selection
@app.callback(
    Output('temp-graph', 'figure'),
    Input('month-dropdown', 'value'))
def update_graph(selected_month):
    fig = px.line(df, x='YEAR', y=selected_month, title=f'Mean Temperature for {selected_month} over the years')
    return fig

# Run the app
if __name__ == '__main__':
    app.run_server(debug=True)
