from django.shortcuts import render, redirect
from django.http import HttpResponse
from django import forms
from django.http import JsonResponse
from django.http import HttpResponseRedirect
from django.urls import reverse
from .models import School_prefects,Compound_prefects,Dinginhall_prefects,Library_prefects,Health_prefects,Protocol_prefects,Prep_prefects,Sports_prefects,Entertainment_prefects,Number_of_voters, Rejected_votes

# UNIQUE CODES LIST
uniqueCodesS = []
uniqueCodesA = []
uniqueCodesB = []
uniqueCodesT = []
uniqueCodesH = []
uniqueCodesV = []


# S000123
# S0005623
# S00023423
# S000324523





# Create your views here.
def index(request):
    if request.method == 'GET':
        # print('This is a GET request')
        return render(request, 'vote/index.html')
    elif request.method == 'POST':
        # print('This is a POST request')
        # print(request.POST.get('code'))
        recived_code = request.POST.get('code')
        if(check_code(recived_code)):
            return render(request, 'vote/vote.html')
        else:
           return render(request, 'vote/votedmessage.html')



def check_code(recived_code):
    code = recived_code
    # GENERAL SCIENCE
    # NOT VOTED
    if (code != '' and code[0].capitalize() == 'S' and len(code) == 7 and code[4] not in uniqueCodesS):
        uniqueCodesS.append(code[4])
        return True
    elif(code != '' and code[0].capitalize() == 'S' and len(code) == 8 and code[4:6] not in uniqueCodesS):
        uniqueCodesS.append(code[4:6])
        return True
    elif(code != '' and code[0].capitalize() == 'S' and len(code) == 9 and code[4:7] not in uniqueCodesS):
        uniqueCodesS.append(code[4:7])
        return True
    elif(code != '' and code[0].capitalize() == 'S' and len(code) == 10 and code[4:8] not in uniqueCodesS ):
        uniqueCodesS.append(code[4:8])
        return True
    
    # GENERAL SCIENCE
    # VOTED
    if (code != '' and code[0].capitalize() == 'S' and len(code) == 7 and code[4] in uniqueCodesS):
        return False
    elif (code != '' and code[0].capitalize() == 'S' and len(code) == 8 and code[4:6] in uniqueCodesS):
        return False
    elif (code != '' and code[0].capitalize() == 'S' and len(code) == 9 and code[4:7] in uniqueCodesS):
        return False
    elif (code != '' and code[0].capitalize() == 'S' and len(code) == 10 and code[4:8] in uniqueCodesS):
        return False
    
    
    # GENERAL ARTS
    # NOT VOTED
    if (code != '' and code[0].capitalize() == 'A' and len(code) == 7 and code[4] not in uniqueCodesA):
        uniqueCodesA.append(code[4])
        return True
    elif(code != '' and code[0].capitalize() == 'A' and len(code) == 8 and code[4:6] not in uniqueCodesA):
        uniqueCodesA.append(code[4:6])
        return True
    elif(code != '' and code[0].capitalize() == 'A' and len(code) == 9 and code[4:7] not in uniqueCodesA):
        uniqueCodesA.append(code[4:7])
        return True
    elif(code != '' and code[0].capitalize() == 'A' and len(code) == 10 and code[4:8] not in uniqueCodesA):
        uniqueCodesA.append(code[4:8])
        return True
    
    # GENERAL ARTS
    # VOTED
    if (code != '' and code[0].capitalize() == 'A' and len(code) == 7 and code[4] in uniqueCodesA):
        return False
    elif (code != '' and code[0].capitalize() == 'A' and len(code) == 8 and code[4:6] in uniqueCodesA):
        return False
    elif (code != '' and code[0].capitalize() == 'A' and len(code) == 9 and code[4:7] in uniqueCodesA):
        return False
    elif (code != '' and code[0].capitalize() == 'A' and len(code) == 10 and code[4:8] in uniqueCodesA):
        return False
    
    # BUSINESS
    # NOT VOTED
    if (code != '' and code[0].capitalize() == 'B' and len(code) == 7 and code[4] not in uniqueCodesB):
        uniqueCodesB.append(code[4])
        return True
    elif(code != '' and code[0].capitalize() == 'B' and len(code) == 8 and code[4:6] not in uniqueCodesB):
        uniqueCodesB.append(code[4:6])
        return True
    elif(code != '' and code[0].capitalize() == 'B' and len(code) == 9 and code[4:7] not in uniqueCodesB):
        uniqueCodesB.append(code[4:7])
        return True
    elif(code != '' and code[0].capitalize() == 'B' and len(code) == 10 and code[4:8] not in uniqueCodesB):
        uniqueCodesB.append(code[4:8])
        return True
    
    # BUSINESS
    # VOTED
    if (code != '' and code[0].capitalize() == 'B' and len(code) == 7 and code[4] in uniqueCodesB):
        return False
    elif (code != '' and code[0].capitalize() == 'B' and len(code) == 8 and code[4:6] in uniqueCodesB):
        return False
    elif (code != '' and code[0].capitalize() == 'B' and len(code) == 9 and code[4:7] in uniqueCodesB):
        return False
    elif (code != '' and code[0].capitalize() == 'B' and len(code) == 10 and code[4:8] in uniqueCodesB):
        return False
    
    
    # TECHNICAL
    # NOT VOTED
    if (code != '' and code[0].capitalize() == 'T' and len(code) == 7 and code[4] not in uniqueCodesT):
        uniqueCodesT.append(code[4])
        return True
    elif(code != '' and code[0].capitalize() == 'T' and len(code) == 8 and code[4:6] not in uniqueCodesT):
        uniqueCodesT.append(code[4:6])
        return True
    elif(code != '' and code[0].capitalize() == 'T' and len(code) == 9 and code[4:7] not in uniqueCodesT):
        uniqueCodesT.append(code[4:7])
        return True
    elif(code != '' and code[0].capitalize() == 'T' and len(code) == 10 and code[4:8] not in uniqueCodesT):
        uniqueCodesT.append(code[4:8])
        return True
    
    # TECHNICAL
    # VOTED
    if (code != '' and code[0].capitalize() == 'T' and len(code) == 7 and code[4] in uniqueCodesT):
        return False
    elif (code != '' and code[0].capitalize() == 'T' and len(code) == 8 and code[4:6] in uniqueCodesT):
        return False
    elif (code != '' and code[0].capitalize() == 'T' and len(code) == 9 and code[4:7] in uniqueCodesT):
        return False
    elif (code != '' and code[0].capitalize() == 'T' and len(code) == 10 and code[4:8] in uniqueCodesT):
        return False
    
    # HOME ECONS
    # NOT VOTED
    if (code != '' and code[0].capitalize() == 'H' and len(code) == 7 and code[4] not in uniqueCodesH):
        uniqueCodesH.append(code[4])
        return True
    elif(code != '' and code[0].capitalize() == 'H' and len(code) == 8 and code[4:6] not in uniqueCodesH):
        uniqueCodesH.append(code[4:6])
        return True
    elif(code != '' and code[0].capitalize() == 'H' and len(code) == 9 and code[4:7] not in uniqueCodesH):
        uniqueCodesH.append(code[4:7])
        return True
    elif(code != '' and code[0].capitalize() == 'H' and len(code) == 10 and code[4:8] not in uniqueCodesH):
        uniqueCodesH.append(code[4:8])
        return True
    
    # HOME ECONS
    # VOTED
    if (code != '' and code[0].capitalize() == 'H' and len(code) == 7 and code[4] in uniqueCodesH):
        return False
    elif (code != '' and code[0].capitalize() == 'H' and len(code) == 8 and code[4:6] in uniqueCodesH):
        return False
    elif (code != '' and code[0].capitalize() == 'H' and len(code) == 9 and code[4:7] in uniqueCodesH):
        return False
    elif (code != '' and code[0].capitalize() == 'H' and len(code) == 10 and code[4:8] in uniqueCodesH):
        return False
    
    
    # VISUAL ARTS
    # NOT VOTED
    if (code != '' and code[0].capitalize() == 'V' and len(code) == 7 and code[4] not in uniqueCodesV):
        uniqueCodesV.append(code[4])
        return True
    elif(code != '' and code[0].capitalize() == 'V' and len(code) == 8 and code[4:6] not in uniqueCodesV):
        uniqueCodesV.append(code[4:6])
        return True
    elif(code != '' and code[0].capitalize() == 'V' and len(code) == 9 and code[4:7] not in uniqueCodesV):
        uniqueCodesV.append(code[4:7])
        return True
    elif(code != '' and code[0].capitalize() == 'V' and len(code) == 10 and code[4:8] not in uniqueCodesV):
        uniqueCodesV.append(code[4:8])
        return True
    
    # VISUAL ARTS
    # VOTED
    if (code != '' and code[0].capitalize() == 'V' and len(code) == 7 and code[4] in uniqueCodesV):
        return False
    elif (code != '' and code[0].capitalize() == 'V' and len(code) == 8 and code[4:6] in uniqueCodesV):
        return False
    elif (code != '' and code[0].capitalize() == 'V' and len(code) == 9 and code[4:7] in uniqueCodesV):
        return False
    elif (code != '' and code[0].capitalize() == 'V' and len(code) == 10 and code[4:8] in uniqueCodesV):
        return False



def check_vote(request):
    # || GLOBAL VARIABLES (BOYS)
    global Andy_Asamoah, Sampson_Gyampo, Vicent_Nkrumah, Michael_Boateng, Bismark_Boateng, Darrell_Sefa, Henry_Adofo, Nana_Owusu, Kelvin_Dasah, Sena_Adams, Issah_Aboagye, Isaac_Brogya, Bright_Aheto, Huziaf_Mahmud, Nawe_Kingsley, Muhammed_Boateng, Kumah_Mensah, Kwaku_Adofo, Kelvin_Boateng, Henry_Agyemang, Darrell_Aboagye, Nana_Boateng, Anane_Owusu, Gadossey_Daniel, Emmanuel_Agyemang, Desmon_Aseidu, Michael_Obeng
    # || GLOBAL VARIABLES (GIRLS)
    global Elizabeth_Gemfuah, Mavis_Agyemang, Judith_Atiakoh, Abigirl_Bonsu, Priscilla_Abu, Qeenster_Sarpong, Juliet_Annien, Saly_White, Emmanuella_Boateng, Blessing_Kwakye, Annima_Agyei_Asanti, Nancy_Boateng, Juliet_Achampong, Princess_Ofori, Prudence_Oti, Elizabeth_Asamoah, Precious_Nkrumah, Olivia_Boateng, Magret_Asanti, Elizabeth_Antwiwaa, Gifty_Afriyei, Candybel_Ofori, Christiana_Asare, Cindy_Agyei, Yvon_Boateng, Emmanuella_Aboagey, Magret_Yeboah
    
    # CALCULATE NUMBER OR VOTERS
    def calculate_number_of_voters():
        number_of_voters = Number_of_voters.objects.get(id=1)
        number_of_voters.voters += 1
        number_of_voters.save()

    # CALCULATE FOR REJECTED VOTES
    def calculate_rejected_votes():
        rejected_vote = Rejected_votes.objects.get(id=1)
        rejected_vote.rejected_votes += 1
        rejected_vote.save()
    
    if request.method == 'POST':
        # VOTES
        boysPrefect =  request.POST.get('boysPrefect')
        compoundPrefectBoys = request.POST.get('compoundPrefectBoy')
        diningHallPrefectBoys = request.POST.get('diningHallPrefectBoy')
        libradyPrefectBoys = request.POST.get('libradyPrefectBoy')
        healthPrefectBoys = request.POST.get('healthPrefectBoy')
        protocolPrefectBoys = request.POST.get('protocolPrefectBoy')
        prepPrefectBoys = request.POST.get('prepPrefectBoy')
        sportsPrefectBoys = request.POST.get('sportsPrefectBoy')
        entertainmentPrefectBoys = request.POST.get('entertainmentPrefectBoy')
        # VOTES
        girlsPrefect = request.POST.get('girlsPrefect')
        compoundPrefectGirls = request.POST.get('compoundPrefectGirl')
        diningHallPrefectGirls = request.POST.get('diningHallPrefectGirl')
        libradyPrefectGirls = request.POST.get('libradyPrefectGirl')
        healthPrefectGirls = request.POST.get('healthPrefectGirl')
        protocolPrefectGirls = request.POST.get('protocolPrefectGirl')
        prepPrefectGirls = request.POST.get('prepPrefectGirl')
        sportsPrefectGirls = request.POST.get('sportsPrefectGirl')
        entertainmentPrefectGirls = request.POST.get('entertainmentPrefectGirl')

        votes = [boysPrefect, compoundPrefectBoys, diningHallPrefectBoys, libradyPrefectBoys, healthPrefectBoys, protocolPrefectBoys, prepPrefectBoys, sportsPrefectBoys, entertainmentPrefectBoys, girlsPrefect, compoundPrefectGirls, libradyPrefectGirls, healthPrefectGirls, protocolPrefectGirls, prepPrefectGirls, sportsPrefectGirls, entertainmentPrefectGirls]

        def calculate_for_votes():
            def increase_prefect_votes(prefect):
                # print(prefect)
                prefect.votes += 1
                prefect.save()
            
            # CALCULATE FOR BOYS VOTE
            boys_school_p = School_prefects.objects.get(fullname=boysPrefect)
            increase_prefect_votes(boys_school_p)
            
            boys_compound_p = Compound_prefects.objects.get(fullname=compoundPrefectBoys)
            increase_prefect_votes(boys_compound_p)
            
            boys_dininghall_p = Dinginhall_prefects.objects.get(fullname=diningHallPrefectBoys)
            increase_prefect_votes(boys_dininghall_p)
            
            boys_library_p = Library_prefects.objects.get(fullname=libradyPrefectBoys)
            increase_prefect_votes(boys_library_p)
            
            boys_health_p = Health_prefects.objects.get(fullname=healthPrefectBoys)
            increase_prefect_votes(boys_health_p)
            
            boys_protocol_p = Protocol_prefects.objects.get(fullname=protocolPrefectBoys)
            increase_prefect_votes(boys_protocol_p)
            
            boys_prep_p = Prep_prefects.objects.get(fullname=prepPrefectBoys)
            increase_prefect_votes(boys_prep_p)
            
            boys_sports_p = Sports_prefects.objects.get(fullname=sportsPrefectBoys)
            increase_prefect_votes(boys_sports_p)
            
            boys_entertainment_p = Entertainment_prefects.objects.get(fullname=entertainmentPrefectBoys)
            increase_prefect_votes(boys_entertainment_p)
            
            # CALCULATE FOR GIRLS VOTE
            girls_school_p = School_prefects.objects.get(fullname=girlsPrefect)
            increase_prefect_votes(girls_school_p)
            
            girls_compound_p = Compound_prefects.objects.get(fullname=compoundPrefectGirls)
            increase_prefect_votes(girls_compound_p)
            
            girls_dininghall_p = Dinginhall_prefects.objects.get(fullname=diningHallPrefectGirls)
            increase_prefect_votes(girls_dininghall_p)
            
            girls_library_p = Library_prefects.objects.get(fullname=libradyPrefectGirls)
            increase_prefect_votes(girls_library_p)
            
            girls_health_p = Health_prefects.objects.get(fullname=healthPrefectGirls)
            increase_prefect_votes(girls_health_p)
            
            girls_protocol_p = Protocol_prefects.objects.get(fullname=protocolPrefectGirls)
            increase_prefect_votes(girls_protocol_p)
            
            girls_prep_p = Prep_prefects.objects.get(fullname=prepPrefectGirls)
            increase_prefect_votes(girls_prep_p)
            
            girls_sports_p = Sports_prefects.objects.get(fullname=sportsPrefectGirls)
            increase_prefect_votes(girls_sports_p)
            
            girls_entertainment_p = Entertainment_prefects.objects.get(fullname=entertainmentPrefectGirls)
            increase_prefect_votes(girls_entertainment_p)

        def validate_vote(all_votes):
            for i in range(len(all_votes)):
                if(all_votes[i] != None):
                    check_for_validation = 'valid vote'
                else:
                    check_for_validation = 'invalid vote'
                    break
            if(check_for_validation == 'invalid vote'):
                calculate_rejected_votes()
                return False
            elif(check_for_validation == 'valid vote'):
                calculate_for_votes()
                calculate_number_of_voters()
                return True

        if(validate_vote(votes)):
            return HttpResponseRedirect(reverse("home"))
        else:
            return render(request, 'vote/rejectedmessage.html')
            # print('Validation Faild')
    else:
       return HttpResponseRedirect(reverse("home"))
   

# || CALCULATE VOTE PERCENTAGE
def vote_percentage(numberOfVotes):
    number_of_voters = Number_of_voters.objects.get(id=1).voters
    if(number_of_voters == 0):
        return 0
    else:
        return round((int(numberOfVotes) / int(number_of_voters)) * 100)


def dashboard(request):
    context = {
    # BOYS VOTES
        # || BOYS SCHOOL PREFECTS
        'Andy_Asamoah': School_prefects.objects.get(fullname='Andy Asamoah').votes,
        'Sampson_Gyampo': School_prefects.objects.get(fullname='Sampson Gyampo').votes,
        'Vicent_Nkrumah': School_prefects.objects.get(fullname='Vicent Nkrumah').votes,
        
        # || BOYS BOYS COMPOUND PREFECTS
        'Michael_Boateng': Compound_prefects.objects.get(fullname='Michael Boateng').votes,
        'Bismark_Boateng': Compound_prefects.objects.get(fullname='Bismark Boateng').votes,
        'Darrell_Sefa': Compound_prefects.objects.get(fullname='Darrell Sefa').votes,
        
        # || BOYS DININGHALL PREFECTS
        'Henry_Adofo': Dinginhall_prefects.objects.get(fullname='Henry Adofo').votes,
        'Nana_Owusu': Dinginhall_prefects.objects.get(fullname='Nana Owusu').votes,
        'Kelvin_Dasah': Dinginhall_prefects.objects.get(fullname='Kelvin Dasah').votes,
        
        # || BOYS LIBRARY PREFECTS
        'Sena_Adams': Library_prefects.objects.get(fullname='Sena Adams').votes,
        'Issah_Aboagye': Library_prefects.objects.get(fullname='Issah Aboagye').votes,
        'Isaac_Brogya': Library_prefects.objects.get(fullname='Isaac Brogya').votes,
        
        # || BOYS HEALTH PREFECTS
        'Bright_Aheto': Health_prefects.objects.get(fullname='Bright Aheto').votes,
        'Huziaf_Mahmud': Health_prefects.objects.get(fullname='Huziaf Mahmud').votes,
        'Nawe_Kingsley': Health_prefects.objects.get(fullname='Nawe Kingsley').votes,
        
        # || BOYS PROTOCOL PREFECTS
        'Muhammed_Boateng': Protocol_prefects.objects.get(fullname='Muhammed Boateng').votes,
        'Kumah_Mensah': Protocol_prefects.objects.get(fullname='Kumah Mensah').votes,
        'Kwaku_Adofo': Protocol_prefects.objects.get(fullname='Kwaku Adofo').votes,
        
        # || BOYS PREP PREFECTS
        'Kelvin_Boateng': Prep_prefects.objects.get(fullname='Kelvin Boateng').votes,
        'Henry_Agyemang': Prep_prefects.objects.get(fullname='Henry Agyemang').votes,
        'Darrell_Aboagye': Prep_prefects.objects.get(fullname='Darrell Aboagye').votes,
        
        # || BOYS SPORTS PREFECTS
        'Nana_Boateng': Sports_prefects.objects.get(fullname='Nana Boateng').votes,
        'Anane_Owusu': Sports_prefects.objects.get(fullname='Anane Owusu').votes,
        'Gadossey_Daniel': Sports_prefects.objects.get(fullname='Gadossey Daniel').votes,
        
        # || BOYS ENTERTAINMENT PREFECTS
        'Emmanuel_Agyemang': Entertainment_prefects.objects.get(fullname='Emmanuel Agyemang').votes,
        'Desmon_Aseidu': Entertainment_prefects.objects.get(fullname='Desmon Aseidu').votes,
        'Michael_Obeng': Entertainment_prefects.objects.get(fullname='Michael Obeng').votes,
        
    # CALCULATE BOYS VOTE PERCENTAGE
        # || BOYS SCHOOL PREFECTS
        'Andy_Asamoah_p': vote_percentage(School_prefects.objects.get(fullname='Andy Asamoah').votes),
        'Sampson_Gyampo_p': vote_percentage(School_prefects.objects.get(fullname='Sampson Gyampo').votes),
        'Vicent_Nkrumah_p': vote_percentage(School_prefects.objects.get(fullname='Vicent Nkrumah').votes),
        
        # || BOYS COMPOUND PREFECTS
        'Michael_Boateng_p': vote_percentage(Compound_prefects.objects.get(fullname='Michael Boateng').votes),
        'Bismark_Boateng_p': vote_percentage(Compound_prefects.objects.get(fullname='Bismark Boateng').votes),
        'Darrell_Sefa_p': vote_percentage(Compound_prefects.objects.get(fullname='Darrell Sefa').votes),
        
        # || BOYS DININGHALL PREFECTS
        'Henry_Adofo_p': vote_percentage(Dinginhall_prefects.objects.get(fullname='Henry Adofo').votes),
        'Nana_Owusu_p': vote_percentage(Dinginhall_prefects.objects.get(fullname='Nana Owusu').votes),
        'Kelvin_Dasah_p': vote_percentage(Dinginhall_prefects.objects.get(fullname='Kelvin Dasah').votes),
        
        # || BOYS LIBRARY PREFECTS
        'Sena_Adams_p': vote_percentage(Library_prefects.objects.get(fullname='Sena Adams').votes),
        'Issah_Aboagye_p': vote_percentage(Library_prefects.objects.get(fullname='Issah Aboagye').votes),
        'Isaac_Brogya_p': vote_percentage(Library_prefects.objects.get(fullname='Isaac Brogya').votes),
        
        # || BOYS HEALTH PREFECTS
        'Bright_Aheto_p': vote_percentage(Health_prefects.objects.get(fullname='Bright Aheto').votes),
        'Huziaf_Mahmud_p': vote_percentage(Health_prefects.objects.get(fullname='Huziaf Mahmud').votes),
        'Nawe_Kingsley_p': vote_percentage(Health_prefects.objects.get(fullname='Nawe Kingsley').votes),
        
        # || BOYS PROTOCOL PREFECTS
        'Muhammed_Boateng_p': vote_percentage(Protocol_prefects.objects.get(fullname='Muhammed Boateng').votes),
        'Kumah_Mensah_p': vote_percentage(Protocol_prefects.objects.get(fullname='Kumah Mensah').votes),
        'Kwaku_Adofo_p': vote_percentage(Protocol_prefects.objects.get(fullname='Kwaku Adofo').votes),
        
        # || BOYS PREP PREFECTS
        'Kelvin_Boateng_p': vote_percentage(Prep_prefects.objects.get(fullname='Kelvin Boateng').votes),
        'Henry_Agyemang_p': vote_percentage(Prep_prefects.objects.get(fullname='Henry Agyemang').votes),
        'Darrell_Aboagye_p': vote_percentage(Prep_prefects.objects.get(fullname='Darrell Aboagye').votes),
        
        # || BOYS SPORTS PREFECTS
        'Nana_Boateng_p': vote_percentage(Sports_prefects.objects.get(fullname='Nana Boateng').votes),
        'Anane_Owusu_p': vote_percentage(Sports_prefects.objects.get(fullname='Anane Owusu').votes),
        'Gadossey_Daniel_p': vote_percentage(Sports_prefects.objects.get(fullname='Anane Owusu').votes),
        
        # || BOYS ENTERTAINMENT PREFECTS
        'Emmanuel_Agyemang_p': vote_percentage(Entertainment_prefects.objects.get(fullname='Emmanuel Agyemang').votes),
        'Desmon_Aseidu_p': vote_percentage(Entertainment_prefects.objects.get(fullname='Desmon Aseidu').votes),
        'Michael_Obeng_p': vote_percentage(Entertainment_prefects.objects.get(fullname='Michael Obeng').votes),


    # GIRLS VOTES
        # || GIRLS SCHOOL PREFECTS
        'Elizabeth_Gemfuah': School_prefects.objects.get(fullname='Elizabeth Gemfuah').votes,
        'Mavis_Agyemang': School_prefects.objects.get(fullname='Mavis Agyemang').votes,
        'Judith_Atiakoh': School_prefects.objects.get(fullname='Judith Atiakoh').votes,
        
        # || GIRLS COMPOUND PREFECTS
        'Abigirl_Bonsu': Compound_prefects.objects.get(fullname='Abigirl Bonsu').votes,
        'Priscilla_Abu': Compound_prefects.objects.get(fullname='Priscilla Abu').votes,
        'Qeenster_Sarpong': Compound_prefects.objects.get(fullname='Qeenster Sarpong').votes,
        
        # || GIRLS DININGHALL PREFECTS
        'Juliet_Annien': Dinginhall_prefects.objects.get(fullname='Juliet Annien').votes,
        'Saly_White': Dinginhall_prefects.objects.get(fullname='Saly White').votes,
        'Emmanuella_Boateng': Dinginhall_prefects.objects.get(fullname='Emmanuella Boateng').votes,
        
        # || GIRLS LIBRARY PREFECTS
        'Blessing_Kwakye': Library_prefects.objects.get(fullname='Blessing Kwakye').votes,
        'Annima_Agyei_Asanti': Library_prefects.objects.get(fullname='Annima Agyei Asanti').votes,
        'Nancy_Boateng': Library_prefects.objects.get(fullname='Nancy Boateng').votes,
        
        # || GIRLS HEALTH PREFECTS
        'Juliet_Achampong': Health_prefects.objects.get(fullname='Juliet Achampong').votes,
        'Princess_Ofori': Health_prefects.objects.get(fullname='Princess Ofori').votes,
        'Prudence_Oti': Health_prefects.objects.get(fullname='Prudence Oti').votes,
        
        # || GIRLS PROTOCOL PREFECTS
        'Elizabeth_Asamoah': Protocol_prefects.objects.get(fullname='Elizabeth Asamoah').votes,
        'Precious_Nkrumah': Protocol_prefects.objects.get(fullname='Precious Nkrumah').votes,
        'Olivia_Boateng': Protocol_prefects.objects.get(fullname='Olivia Boateng').votes,
        
        # || GIRLS PREP PREFECTS
        'Magret_Asanti': Prep_prefects.objects.get(fullname='Magret Asanti').votes,
        'Elizabeth_Antwiwaa': Prep_prefects.objects.get(fullname='Elizabeth Antwiwaa').votes,
        'Gifty_Afriyei': Prep_prefects.objects.get(fullname='Gifty Afriyei').votes,
        
        # || GIRLS SPORTS PREFECTS
        'Candybel_Ofori': Sports_prefects.objects.get(fullname='Candybel Ofori').votes,
        'Christiana_Asare': Sports_prefects.objects.get(fullname='Christiana Asare').votes,
        'Cindy_Agyei': Sports_prefects.objects.get(fullname='Cindy Agyei').votes,
        
        # || GIRLS ENTERTAINMENT PREFECTS
        'Yvon_Boateng': Entertainment_prefects.objects.get(fullname='Yvon Boateng').votes,
        'Emmanuella_Aboagey': Entertainment_prefects.objects.get(fullname='Emmanuella Aboagey').votes,
        'Magret_Yeboah': Entertainment_prefects.objects.get(fullname='Magret Yeboah').votes,
        
    # CALCULATE GIRLS VOTE PERCENTAGE
        # || GIRLS SCHOOL PREFECTS
        'Elizabeth_Gemfuah_p': vote_percentage(School_prefects.objects.get(fullname='Elizabeth Gemfuah').votes),
        'Mavis_Agyemang_p': vote_percentage(School_prefects.objects.get(fullname='Mavis Agyemang').votes),
        'Judith_Atiakoh_p': vote_percentage(School_prefects.objects.get(fullname='Judith Atiakoh').votes),
        
        # || GIRLS COMPOUND PREFECTS
        'Abigirl_Bonsu_p': vote_percentage(Compound_prefects.objects.get(fullname='Abigirl Bonsu').votes),
        'Priscilla_Abu_p': vote_percentage(Compound_prefects.objects.get(fullname='Priscilla Abu').votes),
        'Qeenster_Sarpong_p': vote_percentage(Compound_prefects.objects.get(fullname='Qeenster Sarpong').votes),
        
        # || GIRLS DININGHALL PREFECTS
        'Juliet_Annien_p': vote_percentage(Dinginhall_prefects.objects.get(fullname='Juliet Annien').votes),
        'Saly_White_p': vote_percentage(Dinginhall_prefects.objects.get(fullname='Saly White').votes),
        'Emmanuella_Boateng_p': vote_percentage(Dinginhall_prefects.objects.get(fullname='Emmanuella Boateng').votes),
        
        # || GIRLS LIBRARY PREFECTS
        'Blessing_Kwakye_p': vote_percentage(Library_prefects.objects.get(fullname='Blessing Kwakye').votes),
        'Annima_Agyei_Asanti_p': vote_percentage(Library_prefects.objects.get(fullname='Annima Agyei Asanti').votes),
        'Nancy_Boateng_p': vote_percentage(Library_prefects.objects.get(fullname='Nancy Boateng').votes),
        
        # || GIRLS HEALTH PREFECTS
        'Juliet_Achampong_p': vote_percentage(Health_prefects.objects.get(fullname='Juliet Achampong').votes),
        'Princess_Ofori_p': vote_percentage(Health_prefects.objects.get(fullname='Princess Ofori').votes),
        'Prudence_Oti_p': vote_percentage(Health_prefects.objects.get(fullname='Prudence Oti').votes),
        
        # || GIRLS PROTOCOL PREFECTS
        'Elizabeth_Asamoah_p': vote_percentage(Protocol_prefects.objects.get(fullname='Elizabeth Asamoah').votes),
        'Precious_Nkrumah_p': vote_percentage(Protocol_prefects.objects.get(fullname='Precious Nkrumah').votes),
        'Olivia_Boateng_p': vote_percentage(Protocol_prefects.objects.get(fullname='Olivia Boateng').votes),
        
        # || GIRLS PREP PREFECTS
        'Magret_Asanti_p': vote_percentage(Prep_prefects.objects.get(fullname='Magret Asanti').votes),
        'Elizabeth_Antwiwaa_p': vote_percentage(Prep_prefects.objects.get(fullname='Elizabeth Antwiwaa').votes),
        'Gifty_Afriyei_p': vote_percentage(Prep_prefects.objects.get(fullname='Gifty Afriyei').votes),
        
        # || GIRLS SPORTS PREFECTS
        'Candybel_Ofori_p': vote_percentage(Sports_prefects.objects.get(fullname='Candybel Ofori').votes),
        'Christiana_Asare_p': vote_percentage(Sports_prefects.objects.get(fullname='Christiana Asare').votes),
        'Cindy_Agyei_p': vote_percentage(Sports_prefects.objects.get(fullname='Cindy Agyei').votes),
        
        # || GIRLS ENTERTAINMENT PREFECTS
        'Yvon_Boateng_p': vote_percentage(Entertainment_prefects.objects.get(fullname='Yvon Boateng').votes),
        'Emmanuella_Aboagey_p': vote_percentage(Entertainment_prefects.objects.get(fullname='Emmanuella Aboagey').votes),
        'Magret_Yeboah_p': vote_percentage(Entertainment_prefects.objects.get(fullname='Magret Yeboah').votes),

    # TOTAL NUMBER OF VOTERS
        'voters_number': Number_of_voters.objects.get(id=1).voters,

    # NUMBER OF REJECTED VOTES
        'rejected_votes': Rejected_votes.objects.get(id=1).rejected_votes,
    }
    return render(request, 'vote/results_dashboard.html', context)
    # return render(request, 'vote/boys_results.html', context)

