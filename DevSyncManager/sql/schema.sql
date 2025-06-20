CREATE TABLE developer (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE task (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    status VARCHAR(100),
    developer_id INT,
    FOREIGN KEY (developer_id) REFERENCES developer(id)
);