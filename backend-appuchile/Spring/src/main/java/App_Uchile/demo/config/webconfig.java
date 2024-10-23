package App_Uchile.demo.config;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

public class webconfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Habilita CORS para todas las rutas
                .allowedOrigins("http://localhost:5173") // Origen de tu frontend
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Métodos permitidos
                .allowedHeaders("Content-Type", "Authorization","**") // Añadir los headers necesarios
                .allowCredentials(true); // Permitir credenciales (cookies, etc.)
}}
