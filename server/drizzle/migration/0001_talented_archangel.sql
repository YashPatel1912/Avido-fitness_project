ALTER TABLE `session_table` ADD `updated_at` timestamp DEFAULT (now()) NOT NULL ON UPDATE CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE `session_table` DROP COLUMN `upadted_at`;