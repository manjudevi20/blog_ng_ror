class PostsController < ApplicationController

	def index
		@posts = 
	end

	def create
		@post = Post.new(post_params)
		if @post.save!
		  render json: @profile, status: :ok and return
		  redirect_to @post
		else
		 render json: {errors: @profile.errors}, status: :unprocessable_entities and return
		end 
	end

	def show
	end

	private
	def post_params
		params.require(:post).permit(:title, :body)
	end	
end
