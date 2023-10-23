from selenium import webdriver
from selenium.webdriver.common.by import By
from urllib.parse import urlparse

driver = webdriver.Chrome()
driver.get('https://gps-plan.com/ayuda/wp-sitemap-posts-epkb_post_type_1-1.xml')

enlaces_href = []

try:
    links = driver.find_elements(By.TAG_NAME, 'a')

    for link in links:
            url = link.get_attribute('href')
            if url and url.startswith('https://gps-plan.com/ayuda/kgps/'):
                enlaces_href.append(url)
    
    for enlace in enlaces_href:
          parsed_url = enlace.split('/')
          slug_enlace = parsed_url[-1]
          print(f"Navegando a {enlace}")
          driver.get(enlace)
          titulo = driver.find_element(By.CSS_SELECTOR, '.eckb-article-title')
          texto = driver.find_element(By.ID, 'eckb-article-content-body')
          with open(f"datos/{slug_enlace}.txt", 'w') as archivo:
            archivo.write(titulo.text + '\n')
            archivo.write(texto.text + '\n')

finally:
      driver.quit()

# # Interactúa con la página como un usuario
# driver.find_element_by_id('input-field').send_keys('texto de ejemplo')

# # Cierra el navegador una vez hecho
# driver.quit()
