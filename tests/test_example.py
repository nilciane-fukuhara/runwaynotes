import re
from playwright.sync_api import Page, expect

def test_example(page: Page):
    """
    Teste básico para validar que o Pytest e o Playwright estão configurados corretamente.
    Substitua a URL pela do seu projeto quando ele estiver rodando (ex: http://localhost:3000)
    """
    page.goto("https://playwright.dev/")
    expect(page).to_have_title(re.compile("Playwright"))
