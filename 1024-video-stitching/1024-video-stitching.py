class Solution:
    def videoStitching(self, clips: List[List[int]], time: int) -> int:
        clips.sort(key=lambda x: x[0])  

        num_clips = 0
        current_end_time = 0
        i = 0
        
        while i < len(clips):
            if clips[i][0] > current_end_time:
                return -1
            
            max_end_time = current_end_time
            while i < len(clips) and clips[i][0] <= current_end_time:
                max_end_time = max(max_end_time, clips[i][1])
                i += 1
                
            num_clips += 1
            current_end_time = max_end_time
            
            if current_end_time >= time:
                return num_clips
            
        return -1