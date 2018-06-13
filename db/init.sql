USE chimeDB;

INSERT INTO organizations (username) VALUES 
('gym'), ('church'), ('school'), ('park'), ('lab');

INSERT INTO followers (username) VALUES 
('john'), ('jane'), ('carl'), ('susan'), ('rick');

INSERT INTO organizations_followed
(follower, organization) VALUES
('john', 'gym'),
('john', 'church'),
('jane', 'park'),
('jane', 'gym'),
('carl', 'school'),
('susan', 'church'),
('susan', 'park'),
('rick', 'gym'),
('rick', 'lab');

INSERT INTO organization_texts (organization, message) VALUES 
('lab', 'applicants wanted for testing portal gun'),
('school', 'homecoming next week'),
('gym', 'installed obstacle course to train for american nija warrior'),
('church', 'yard sale tomorrow'),
('lab', 'test subject has escaped, please return to aperture science');
