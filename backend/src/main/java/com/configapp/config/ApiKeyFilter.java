package com.configapp.config;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class ApiKeyFilter extends OncePerRequestFilter {

    @Value("${app.api-key}")
    private String apiKey;

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain
    ) throws ServletException, IOException {

        boolean isProtectedWrite = "POST".equalsIgnoreCase(request.getMethod())
                && request.getRequestURI().startsWith("/api/config");

        if (isProtectedWrite && !apiKey.isBlank()) {
            String providedKey = request.getHeader("X-API-Key");
            if (!apiKey.equals(providedKey)) {
                response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Chave de API inválida ou ausente");
                return;
            }
        }

        filterChain.doFilter(request, response);
    }
}
