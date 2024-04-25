CREATE TABLE users (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(50) NULL DEFAULT NULL,
    lastName VARCHAR(50) NULL DEFAULT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL,
    intro VARCHAR(20) NULL DEFAULT NULL,
    profile TEXT NULL DEFAULT NULL,
    avartar VARCHAR(100) DEFAULT '/avartar.jpg',
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    UNIQUE INDEX uq_email (email ASC)
);

CREATE TABLE tokens (
    userId INT UNSIGNED NOT NULL,
    token VARCHAR(100) NOT NULL,
    expireAt DATETIME NOT NULL,
    PRIMARY KEY (userId, token),
    UNIQUE INDEX uq_userid (userId ASC)
);

CREATE TABLE posts (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    authorId INT UNSIGNED NOT NULL,
    parentId BIGINT UNSIGNED NULL DEFAULT NULL,
    title VARCHAR(100) NOT NULL,
    metaTitle VARCHAR(100) NULL,
    summary TINYTEXT NULL,
    slug VARCHAR(100) NOT NULL,
    content TEXT NULL DEFAULT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME NULL DEFAULT NULL,
    PRIMARY KEY (id),
    UNIQUE INDEX uq_slug (slug ASC),
    INDEX uq_author (authorId)
);

CREATE TABLE post_comment (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    postId BIGINT UNSIGNED NOT NULL,
    parentId BIGINT UNSIGNED NULL DEFAULT NULL,
    content TEXT NULL DEFAULT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id),
    INDEX idx_comment_post (postId ASC)
);

CREATE TABLE post_like (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    postId BIGINT UNSIGNED NOT NULL,
    userId BIGINT UNSIGNED NOT NULL,
    createdAt datetime DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    INDEX idx_like_post (postId ASC)
);

CREATE TABLE categories (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    metaTitle VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL,
    content TEXT NULL DEFAULT NULL,
    PRIMARY KEY (id),
    UNIQUE INDEX uq_slug (slug ASC)
);

CREATE TABLE post_category (
    postId BIGINT UNSIGNED NOT NULL,
    categoryId INT UNSIGNED NOT NULL,
    PRIMARY KEY (postId, categoryId)
);

CREATE TABLE lists (
    id BIGINT UNSIGNED NOT NULL,
    userId INT UNSIGNED NOT NULL,
    title VARCHAR(100),
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    INDEX idx_user (userId ASC)
);

CREATE TABLE items (
    id BIGINT UNSIGNED NOT NULL,
    listId BIGINT UNSIGNED NOT NULL,
    postId BIGINT UNSIGNED NOT NULL,
    url VARCHAR(100) NOT NULL,
    PRIMARY KEY (id),
    INDEX idx_list (listId ASC)
);

ALTER TABLE posts ADD CONSTRAINT fk_posts FOREIGN KEY (authorId) REFERENCES users (id) ON DELETE CASCADE;
ALTER TABLE tokens ADD CONSTRAINT fk_tokens FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE;
ALTER TABLE post_comment ADD CONSTRAINT fk_post_comment FOREIGN KEY (postId) REFERENCES posts(id) ON DELETE CASCADE;
ALTER TABLE post_like ADD CONSTRAINT fk_post_like FOREIGN KEY (postId) REFERENCES posts(id) ON DELETE CASCADE;
ALTER TABLE post_category ADD CONSTRAINT fk1_post_category FOREIGN KEY (postId) REFERENCES posts(id) ON DELETE CASCADE;
ALTER TABLE post_category ADD CONSTRAINT fk2_post_category FOREIGN KEY (categoryId) REFERENCES categories(id) ON DELETE CASCADE;
ALTER TABLE lists ADD CONSTRAINT fk_lists FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE;
ALTER TABLE items ADD CONSTRAINT fk1_items FOREIGN KEY (listId) REFERENCES lists(id) ON DELETE CASCADE;
ALTER TABLE items ADD CONSTRAINT fk2_items FOREIGN KEY (postId) REFERENCES posts(id) ON DELETE CASCADE;