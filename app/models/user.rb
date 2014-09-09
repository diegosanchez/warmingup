class User < ActiveRecord::Base
  before_save { self.email = email.downcase }

  validates :name, presence: true
  validates :email, uniqueness: true, presence: true
  has_many :microposts
end
