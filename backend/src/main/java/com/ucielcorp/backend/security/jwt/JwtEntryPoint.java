package com.ucielcorp.backend.security.jwt;

// Verifica si hay algún token, si la respuesta es negativa, devuelve un error 401 de denegación de
// acceso al sistema.

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class JwtEntryPoint implements AuthenticationEntryPoint {

    // Metodo para ver por consola si hay algún error en algun metodo
    private final static Logger logger = LoggerFactory.getLogger(JwtEntryPoint.class);

    // Básicamente rechaza todas las authentication no válidas
    @Override
    public void commence(HttpServletRequest req, HttpServletResponse res, AuthenticationException authException)
            throws IOException, ServletException {
        logger.error("Fail en el método commnece");
        res.sendError(HttpServletResponse.SC_UNAUTHORIZED, "No autorizado");

    }
}
