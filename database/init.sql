CREATE TABLE IF NOT EXISTS appointments (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    appointment_date DATE NOT NULL
);
