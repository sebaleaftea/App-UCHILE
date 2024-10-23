package App_Uchile.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig  {

    

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                // Desactiva CSRF solo para la consola H2
                .csrf(csrf -> csrf.ignoringRequestMatchers("/h2-console/**", "/usuarios", "/permisos/**", "/roles", "/Equipo"))

                // Permitir acceso a la consola H2 sin autenticación
                .authorizeHttpRequests(authz -> authz
                        .requestMatchers("/h2-console/**", "/usuarios", "/permisos/**", "/roles/**","/Equipo/**").permitAll()
                        .anyRequest().authenticated()
                )

                // Deshabilita las políticas de encabezado que bloquean la carga en iframe para H2
                .headers(headers -> headers
                        .frameOptions(frameOptions -> frameOptions.disable())
                );

        return http.build();
    }
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
